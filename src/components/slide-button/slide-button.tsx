import { Component, Prop, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'slide-button',
  styleUrl: 'slide-button.scss',
  shadow: true
})
export class SlideButton {
  @Prop() buttontext: string;
  @Prop() helpertext: string;
  @Prop() instructions: string;
  @Prop({
    mutable: true
  }) boundary: number; // cannot button drag past this X position
  @Prop() disabled: boolean;

  private buttonContainer: HTMLElement;
  private button: HTMLElement;

  btnXPos:   number; // original X position for button
  btnWidth:  number; // button width
  clickXPos: number; // position where the button was clicked
  btnMargin: number = 3;

  @Event() onSlideReady: EventEmitter;

  constructor() {
    // Include this lines for events otherwise this.boundary
    // will always be undefined
    this.activateDrag = this.activateDrag.bind(this);
    this.dragButton   = this.dragButton.bind(this);
    this.endDrag      = this.endDrag.bind(this);
  }

  componentDidLoad() {
    // // let btn: any  = this.buttonContainer;
    // // this.button   = btn.querySelectorAll('button')[0];
    // this.btnXPos  = this.button.offsetLeft;
    // this.btnWidth = this.button.offsetWidth;

    // // let btnWrapper: any           = btn.querySelectorAll('.slideBtn-wrapper')[0];
    // let btnContainerWidth: number = this.buttonContainer.offsetWidth;
    // this.boundary                 = btnContainerWidth - this.btnWidth - ( this.btnMargin + 1 );
    // console.log('buttonContainer', this.buttonContainer);
    // console.log('button', this.buttonContainer.children);
    // console.log('componentDidLoad', btnContainerWidth, this.boundary);
  }

  slideReadyHandler(event: any, btn: any) {
    // const self: any = this;
    this.dragActive = false;
    this.onSlideReady.emit({ evt: event, target: btn });

    console.log('SlideReady event emitted');
    // setTimeout(function () {
    //   self.endDrag(event);
    // }, 1500);
  }

  dragActive: boolean = false;

  activateDrag(e) {
    if (e.target) {
      this.dragActive = true;
      this.clickXPos  = e.clientX || e.changedTouches[0].clientX || e.touches[0].clientX;
      console.log(this.dragActive, this.clickXPos);
      console.log('buttonContainer', this.buttonContainer, 'Width: ', this.buttonContainer.offsetWidth);

      let btnWidth: number          = this.button.offsetWidth;
      let btnContainerWidth: number = this.buttonContainer.offsetWidth;
      this.boundary                 = btnContainerWidth - btnWidth - ( this.btnMargin + 1 );
    }
  }
  dragButton(e) {
    if (this.dragActive === true) {
      let btn: any     = e.target;
      let posX: number = e.clientX || e.changedTouches[0].clientX || e.touches[0].clientX;
      posX = posX - this.clickXPos;

      if (posX >= 0 && posX <= this.boundary) {
        btn.style.transform = 'translateX(' + posX + 'px)'; // ; transition: 0.5s ease-in-out;
      } else {
        if (posX >= this.boundary) {
          console.log('Dragged past boundary. Doing onSlideReady.')
          this.slideReadyHandler(e, btn);
        }
      }
    }
  }
  @Method() endDrag(e) {
    let posX: number = e.clientX || e.changedTouches[0].clientX || e.touches[0].clientX;
    posX = posX - this.clickXPos;
    if (posX < this.boundary) {
      this.dragActive = false;
      let btn: any = e.target;
      btn.style.transform = 'translateX(0px)';

      console.log('endDrag. Resetting button state.');
    }
    // this.slideReadyHandler(e);
  }

  render() {
    return (
      <div class="slideBtn-wrapper"
        ref={el => this.buttonContainer = el as HTMLElement}
      >
          <div>
          <button
            type="button"
            ref={el => this.button = el as HTMLElement}
            onMouseDown={this.activateDrag}
            onMouseMove={this.dragButton}
            onMouseUp={this.endDrag}
            onTouchStart={this.activateDrag}
            onTouchMove={this.dragButton}
            onTouchEnd={this.endDrag}
            disabled={this.disabled}
            >{ this.buttontext }</button>
            <span>{ this.helpertext }</span>
          </div>
          <p>{ this.instructions }</p>
      </div>

    )
  }

}
