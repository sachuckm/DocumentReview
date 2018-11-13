import React, { Component } from 'react';
import './DocumentContainerComponent.css';

import DocInfoCard from '../../components/DocInfoCard/DocInfoCard';
import ReactDOM from 'react-dom';
import includes from 'lodash/includes';
import toLower from 'lodash/toLower';
import findIndex from 'lodash/findIndex';
import merge from 'lodash/merge';
import FileDisplayContainer from './../fileDisplayContainer/FileDisplayContainer';
import WordExtractor from 'word-extractor';

const sampleWordDoc1 = require('./../../resource/sample1.docx');
const sampleWordDoc2 = require('./../../resource/sample2.docx');
const sampleWordDoc3 = require('./../../resource/sample3.docx');
const sampleWordDoc4 = require('./../../resource/sample4.docx');




export default class DocumentContainerComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { Seachid : '', searchedNames : [], names: [
        {isSelected:false, id:2, name : 'document 1', approved: 0 , rejected: 0, docList: [ {filename:"file1", link:sampleWordDoc1, id:1, status:'' }, {filename:"file2", link:sampleWordDoc2, id:2, status:'' },{filename:"file3", link:sampleWordDoc3, id:3, status:'' }]},
        {isSelected:false, id:3, name : 'document 2', approved: 0 , rejected: 0, docList:[{filename:"file1", link:sampleWordDoc1, id:1, status:'' }, {filename:"file3", link:sampleWordDoc3,id:3, status:'' }]},
        {isSelected:false, id:4, name : 'document 3', approved: 0 , rejected: 0, docList:[ {filename:"file2", link:sampleWordDoc2, id:2, status:'' },{filename:"file3", link:sampleWordDoc3, id:3, status:'' }]},
        {isSelected:false, id:5, name : 'document 4', approved: 0 , rejected: 0, docList:[{filename:"file1", link:sampleWordDoc4, id:1, status:'' }, {filename:"file2", id:2, link:sampleWordDoc2, status:'' },{filename:"file3", link:sampleWordDoc3, id:3, status:'' }]},
        {isSelected:false, id:6, name : 'document 5', approved: 0 , rejected: 0, docList:[]},
        {isSelected:false, id:7, name : 'document 6', approved: 0 , rejected: 0, docList:[]},
        {isSelected:false, id:8, name : 'document 7', docList:[]},
        {isSelected:false, id:9, name : 'document 8', docList:[]},
        {isSelected:false, id:10, name : 'document 9', docList: []},
        {isSelected:false, id:11, name : 'document 10',docList: []},
        {isSelected:false, id:12, name : 'document 11',docList: []},
        {isSelected:false, id:13, name : 'document 12',docList: []},
        {isSelected:false, id:14, name : 'document 13',docList: []},
        {isSelected:false, id:15, name : 'document 14',docList: []}
      ]};

    }
 
    changecapture = (event) => {
      let searchArray = this.state.names.filter((item) => {
        if (this.props.selectedDoc.id === item.id && item.isSelected === this.props.selectedDoc.isSelected) {
          item.isSelected = true
        } else {  item.isSelected = false; }
        var extractor = new WordExtractor();
        var extracted = extractor.extract(sampleWordDoc1);
        extracted.then((doc) => {
          console.log(doc.getBody());
        });
            if (includes(toLower(item.name), toLower(event.target.value))) 
            return item
      })
      this.setState({Seachid : event.target.value})
      if (searchArray.length !== this.state.searchedNames.length)
      this.setState({searchedNames : searchArray})

      

    }
    docSelected (event, selectedItem) {
      const updatedItems = this.state.searchedNames.map((item) => {
      item.id === selectedItem.id ? item.isSelected = true : item.isSelected = false;
        return item;
      })
      const updatedItem = this.state.searchedNames.find((item) => {
        item.id === selectedItem.id ? item.isSelected = true : item.isSelected = false;
        if (item.id === selectedItem.id) return item;
        })
      this.setState({searchedNames: updatedItems})
      this.props.selectDocumentAction(updatedItem);
    }
    componentDidMount() {
      let localst = JSON.parse(localStorage.getItem('state'));
      let names = null;
      if (localst && localst.userReducer && localst.userReducer.selectedDoc) {
        const index = findIndex(this.state.names, {id: localst.userReducer.selectedDoc.id});
        this.state.names.splice(index, 1, localst.userReducer.selectedDoc);
      } else {
        this.state.names.splice(0, 1, {isSelected:false, id:2, name : 'document 1', approved: 0 , rejected: 0, docList: [ {filename:"file1", id:1, status:'' }, {filename:"file2", id:2, status:'' },{filename:"file3", id:3, status:'' }]});
      }
     
      this.setState({searchedNames: this.state.names});
    }

    statusUpdate(fileId, status ) {
      let isstatusNeedsToUpdate = false;
      console.log(this.state.searchedNames)
      const index = findIndex(this.state.searchedNames, {id: this.props.selectedDoc.id});
        const updatedItem = this.state.searchedNames.find((item) => {
          if (item.id === this.props.selectedDoc.id ) {

            item.docList.find((file) => {
              if (file.id === fileId && file.status === '') {
                file.status = status;
                isstatusNeedsToUpdate = true;
                return file
                
              } else if (file.id === fileId && file.status !== status) {
                if(!status) {
                  item.approved--;
                } else {
                  item.rejected--;
                }
                file.status = status;
                isstatusNeedsToUpdate = true;
                return file
              }
            })
            if (isstatusNeedsToUpdate)  {
              if(status) {
                item.approved++;
              } else {
                item.rejected++;
              }
            }
            return item
          }
        });
        let items = this.state.searchedNames[index] = updatedItem;
      this.setState({searchedNames: merge(this.state.searchedNames, updatedItem)})

    }
    render() {
      const list = this.state.searchedNames.map((item, index) =>
        <DocInfoCard 
            docSelected = {this.docSelected.bind(this)}
            img = {item.img}
            name = {item.name}
            type = "list"
            rejected = {item.rejected}
            approved = {item.approved}
            isSelected ={item.isSelected}
            cssClassName ="containerdocrelative"
             id={item.id}
            >
        </DocInfoCard>);
        const documentsList = (<div>
        <input placeholder="Search Documents"  onChange={this.changecapture} value={this.state.Seachid} className="Searchdoc" type="text" />
        {list}
        </div>) 
      return (
        <div> <div className = "docList">
       {documentsList}
        </div>
        <FileDisplayContainer 
        selectedDoc =  {this.props.selectedDoc}
        statusUpdate = {this.statusUpdate.bind(this)}
        />
        </div>
      );
    }
  }
  ReactDOM.render(
    <DocumentContainerComponent />,
    document.getElementById('root')
  );