import { View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default function FaceDetectorScreen() {
    const handleFacesDetected = (faces) => {
        console.log(faces);
    }

    return (
        <View>
            <Camera 
                style={{ width: 300, height: 400 }}
                type={CameraType.front}
                onFacesDetected={handleFacesDetected}
                faceDetectorSettings={{
                    mode: FaceDetector.FaceDetectorMode.fast,
                    detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
                    runClassifications: FaceDetector.FaceDetectorClassifications.none,
                    minDetectorInterval: 100,
                    tracking: true,
                }}
            />
        </View>
    )
}