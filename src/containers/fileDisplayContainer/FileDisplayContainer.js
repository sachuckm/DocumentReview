import React, { Component } from 'react';
import './FileDisplayContainer.css';
import DocInfoCard from '../../components/DocInfoCard/DocInfoCard';
import ReactDOM from 'react-dom';
import DisplayAreaCoponent from '../../components/DisplayAreaCoponent/DisplayAreaCoponent';

let isOpen = true;
export default class FileDisplayContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {inputvalue: ''};
      this.onKeyPressEnter = this.onKeyPressEnter.bind(this);
      this.changecapture = this.changecapture.bind(this);
    }
    handleSubmit(event) {
      this.setState({isLoggedIn: true});
    }
  changecapture(event) {
    this.setState({inputvalue: event.target.value})
  }
onKeyPressEnter(e) {
  isOpen =false;
  if (e.charCode === 13) {
  this.setState({inputvalue: ''})
  }
}
  docSelected(event, props) {
    event.preventDefault();
  }
  statusSelected(event, props, status) {
    event.preventDefault();
      this.props.statusUpdate(props.id, status);
  }
  openLink(event, link) {
    window.open(link)
//console.log(props.link)
  }
  render() {
  const fileList = this.props && this.props.selectedDoc && this.props.selectedDoc.docList && this.props.selectedDoc.docList.map((file) => {
    return (<div> <DocInfoCard
  docSelected = {this.docSelected.bind(this)}
  statusSelected = {this.statusSelected.bind(this)}
  type = "display"
  openLink = {this.openLink.bind(this)}
  status = {file.status}
  name = {file.filename}
  id = {file.id}
  link = {file.link}

  cssClassName ="container_display"

  ></DocInfoCard>
  <DisplayAreaCoponent
   link = {file.link}
   openLink = {this.openLink.bind(this)}
   /> </div>)
  })
      return (
        <div className = "displayArea"> {fileList}  </div>
      );
    }
  }
  ReactDOM.render(
    <FileDisplayContainer />,
    document.getElementById('root')
  );