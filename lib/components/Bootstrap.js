import React from 'react'

export default class Bootstrap extends React.Component {

  render() {
    const data = JSON.stringify(this.props.data.toString())
    const js = `Isomorph(${data})`
    return <script dangerouslySetInnerHTML={{ __html: js }} />
  }

}
