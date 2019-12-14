
  /**
   * method to filter the attributes from props
   */
  export const getAttributesFromProps = (props) => {
    const filterAtt = key => key !== 'textContent'
    return Object.keys(props).filter(filterAtt)
  }

  export const setAttribute = (props, element) => {
    return (att) => element.setAttribute(att, props[att])
  }

  /**
   * method to add the attributes to element
   */
  export const addEventAndAttributes = (element, props) => {
    const attributes = getAttributesFromProps(props)

    attributes.forEach(setAttribute(props, element))

    if(props.textContent) element.textContent = props.textContent

    return element
  }

  /**
   * method to create an element from vdom node object
   */
  export const createElement = (vdom) => {
    const { type, props } = Object.assign({}, vdom)

    const element = document.createElement(type)

    if(props) addEventAndAttributes(element, props)

    return element
  }