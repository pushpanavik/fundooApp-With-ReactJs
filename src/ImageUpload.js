
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom'; 
import ReactCrop, { makeAspectCrop } from '../lib/ReactCrop';

/**
 * Load the image in the crop editor.
 */
const cropEditor = document.querySelector('#crop-editor');

function loadEditView(dataUrl) {
  class Parent extends PureComponent {
    state = {
      crop: {
        x: 20,
        y: 10,
        width: 40,
        aspect: 16 / 9,
      },
      maxHeight: 80,
    }

    onButtonClick = () => {
      this.setState({
        crop: {
          x: 20,
          y: 5,
          aspect: 1,
          height: 50,
        },
        disabled: true,
      });
    }

    onButtonClick2 = () => {
      this.setState({
        crop: {
          x: 20,
          y: 5,
          height: 20,
          width: 30,
        },
        disabled: false,
      });
    }

    onImageLoaded = (image, pixelCrop) => {
      console.log('onImageLoaded', { image, pixelCrop });
    }

    onCropComplete = (crop, pixelCrop) => {
      console.log('onCropComplete', { crop, pixelCrop });
    }

    onCropChange = (crop, pixelCrop) => {
      // console.log('onCropChange', { crop, pixelCrop });
      this.setState({ crop });
    }

    render() {
      return (
        <div>
          <ReactCrop
            {...this.state}
            className="ACustomClassA ACustomClassB"
            src={dataUrl}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
          <button type="button" onClick={this.onButtonClick}>Programatically set crop</button>
          <button type="button" onClick={this.onButtonClick2}>Programatically set crop 2</button>
        </div>
      );
    }
  }

  ReactDOM.render(<Parent />, cropEditor);
}

/**
 * Select an image file.
 */
const imageType = /^image\//;
const fileInput = document.querySelector('#file-picker');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files.item(0);

  if (!file || !imageType.test(file.type)) {
    return;
  }

  const reader = new FileReader();

  reader.onload = (e2) => {
    loadEditView(e2.target.result);
  };

  reader.readAsDataURL(file);
});
 