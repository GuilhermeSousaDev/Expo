import { View } from 'react-native';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaVerifier } from 'expo-firebase-recaptcha';
import { useEffect, useRef } from 'react';
import { app, auth } from '../config/firebase';

export default function FirebaseScreen() {
    const firebaseRecaptchaRef = useRef();

    useEffect(() => {
        (async () => {
            const recaptchaVerifier = new FirebaseRecaptchaVerifier('recaptcha-container');
            const phoneAuth = new auth.PhoneAuthProvider(auth);

            const verificationId = await phoneAuth.verifyPhoneNumber('+16505550101', recaptchaVerifier);

            console.log(verificationId);
        })();
    }, []);

    return (
        <View>
            <FirebaseRecaptchaVerifierModal 
                ref={firebaseRecaptchaRef}
                firebaseConfig={app.options}
            />
        </View>
    )
}