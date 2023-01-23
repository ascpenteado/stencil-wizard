import { pascalCase } from "pascal-case";

export default async function createStencilTemplate(
  component: string,
  filesBaseName: string,
  style: string,
  commented: boolean
) {
  const componentClassName = pascalCase(component);
  const stencilCompleteTemplate = `
  import { Component, Host, h, Element, State, Prop, Watch, Event, EventEmitter, Listen, Method } from '@stencil/core';
  
  @Component({
    tag: "${component}",
    styleUrl: "${filesBaseName}.styles.${style}",
    shadow: true,
    assetsDirs: ['assets']
  })
  export class ${componentClassName} {

    // Reference: https://stenciljs.com/docs/style-guide

    /**
     * 1. Own Properties
     * Always set the type if a default value has not
     * been set. If a default value is being set, then type
     * is already inferred. List the own properties in
     * alphabetical order. Note that because these properties
     * do not have the @Prop() decorator, they will not be exposed
     * publicly on the host element, but only used internally.
     */
    num: number;
    someText = "default";
  
    /**
     * 2. Reference to host HTML element.
     * Inlined decorator
     */
    @Element() el: HTMLElement;
  
    /**
     * 3. State() variables
     * Inlined decorator, alphabetical order.
     */
    @State() isValidated: boolean;
  
    /**
     * 4. Public Property API
     * Inlined decorator, alphabetical order. These are
     * different than "own properties" in that public props
     * are exposed as properties and attributes on the host element.
     * Requires JSDocs for public API documentation.
     */
    @Prop() content: string;
  
    /**
     * Prop lifecycle events SHOULD go just behind the Prop they listen to.
     * This makes sense since both statements are strongly connected.
     * - If renaming the instance variable name you must also update the name in @Watch()
     * - Code is easier to follow and maintain.
     */
    @Prop() swipeEnabled = true;
  
    @Watch("swipeEnabled")
    swipeEnabledChanged(newSwipeEnabled: boolean, oldSwipeEnabled: boolean) {
      this.updateState();
    }
  
    /**
     * 5. Events section
     * Inlined decorator, alphabetical order.
     * Requires JSDocs for public API documentation.
     */
    @Event() ionClose: EventEmitter;
  
    /**
     * 6. Component lifecycle events
     * Ordered by their natural call order, for example
     * WillLoad should go before DidLoad.
     */
    connectedCallback() {}
    disconnectedCallback() {}
    componentWillLoad() {}
    componentDidLoad() {}
    componentWillUpdate() {}
    componentDidUpdate() {}
    componentWillRender() {}
    componentShouldRender(newVal: any, oldVal: any, propName: string) {}
    componentDidRender() {}
  
    /**
     * 7. Listeners
     * It is ok to place them in a different location
     * if makes more sense in the context. Recommend
     * starting a listener method with "on".
     * Always use two lines.
     */
    @Listen("click", { enabled: false })
    onClick(ev: UIEvent) {
      console.log("hi!");
    }
  
    /**
     * 8. Public methods API
     * These methods are exposed on the host element.
     * Always use two lines.
     * Public Methods must be async.
     * Requires JSDocs for public API documentation.
     */
    @Method()
    async open(): Promise<boolean> {
      // ...
      return true;
    }
  
    /**
     * 9. Local methods
     * Internal business logic. These methods cannot be
     * called from the host element.
     */
    prepareAnimation(): Promise<void> {
      // ...
    }
  
    /**
     * 10. render() function
     * Always the last public method in the class.
     * If private methods present, they are below public methods.
     */
    render() {
      return (
        <Host
          attribute="navigation"
          side={this.isRightSide ? "right" : "left"}
          type={this.type}
          class={{
            "something-is-animating": this.isAnimating,
          }}
        >
          <div class="menu-inner page-inner">
            <slot></slot>
          </div>
        </Host>
      );
    }
  }
  `;

  const stencilSimpleTemplate = `
  import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: "${component}",
    styleUrl: "${filesBaseName}.styles.${style}",
    shadow: true,
  })
  export class ${componentClassName} {
    
    render() {
      return (
        <Host>
          <slot></slot>
        </Host>
      );
    }
  }

  `;

  return commented ? stencilCompleteTemplate : stencilSimpleTemplate;
}
