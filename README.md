# Strongylid Egg Detection

This project is a React application that uses the Roboflow API to detect Strongylid parasite eggs in images. It is built with Vite and React.js, and utilizes Material UI for styling components.

## Features

- Upload images for inference using a custom file upload button.
- Display the number of detected parasite eggs in an uploaded image.
- Visual representation of detection results with bounding boxes drawn on the image.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/asatpathy314/eggs-by-the-dozen/blob/main/README.md
```

2. Navigate to the project directory:
```bash
cd strongylid-egg-detection
```

3. Install the dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory of the project and add a your API key:
```bash
VITE_ROBOFLOW_API_KEY=INSERT-API-KEY-HERE
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) to view the application in the browser.

## Usage

To use the application:

1. Click the "Upload" button to select an image file (.jpg or .png) from your device.
2. Once an image is selected, the application will automatically send it to the Roboflow API for inference.
3. The results will be displayed on the image, with bounding boxes around detected parasite eggs.
4. The total number of detected eggs will be displayed below the image.

## Components

- `Inference`: The main component that renders the application UI and handles state management.
- `InputFileUpload`: A component for uploading image files.
- `Roboflow`: A component that handles sending images to the Roboflow API and drawing the results.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/asatpathy314/eggs-by-the-dozen/blob/main/LICENSE) file for details.