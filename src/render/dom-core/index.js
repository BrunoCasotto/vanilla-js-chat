
const DomCore = () => {

  /**
   * method to filter the attributes from props
   */
  const getAttributesFromProps = (props) => {
    const filterAtt = key => key !== 'textContent'
    return Object.keys(props).filter(filterAtt)
  }

  const setAttribute = (props, element) => {
    return (att) => element.setAttribute(att, props[att])
  }

  /**
   * method to add the attributes to element
   */
  const addAttAndTextOnElement = (element, props) => {
    const attributes = getAttributesFromProps(props)

    attributes.forEach(setAttribute(props, element))

    if(props.textContent) element.textContent = props.textContent

    return element
  }

  /**
   * method to create an element from vdom node object
   */
  const createElement = (vdom) => {
    const { type, props } = vdom

    const element = document.createElement(type)

    if(props) addAttAndTextOnElement(element, props)

    return element
  }

  return {
    createElement,
    getAttributesFromProps,
    setAttribute,
    addAttAndTextOnElement,
  }
}

export default new DomCore()
