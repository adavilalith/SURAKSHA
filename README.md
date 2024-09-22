# SURAKSHA: Browser-Based Face Liveness Detection System

This project is developed for **Smart India Hackathon 2024**, aiming to implement an efficient, real-time, and secure face liveness detection system. The solution combines **passive** and **active** liveness detection techniques to prevent spoofing attempts, optimized to run within browsers using **TensorFlow.js**, ensuring compatibility with various devices and network conditions.

## Problem Statement

- **Problem Statement ID**: 1671  
- **Title**: Develop a functional solution that demonstrates face liveness detection.  
- **Theme**: Smart Automation  
- **Category**: Software  

## Features

- **Passive Liveness Detection**: Uses environmental factors like skin texture, light reflection, and image depth to determine if the face is real.
- **Active Liveness Detection**: Prompts users to perform simple actions (e.g., blinking, smiling, or turning their head) to verify liveness.
- **Real-Time Processing**: Optimized for client-side processing within the browser using **TensorFlow.js**.
- **Edge Deployment**: Runs directly on the user’s device, leveraging technologies like **WebGL** for GPU acceleration.
- **Small Model Size**: The model is under 5MB, ensuring compatibility even in low-bandwidth environments.

## Tools and Technologies

- **Frontend**: 
  - React.js
  - Tailwind CSS
  - Material UI
  - Shadcn/UI
  - Canvas API
- **Machine Learning**:
  - TensorFlow.js
  - OpenCV.js
  - Crypto.js (for encryption and data security)

## Technical Approach

1. **Accuracy in Diverse Environments**: Model training includes data augmentation techniques to handle different lighting and backgrounds.
2. **Real-Time Processing**: The model uses **WebGL** for GPU acceleration, with a target of sub-500ms inference times.
3. **Model Size Optimization**: Techniques like **model pruning**, **quantization**, and lightweight architectures (e.g., MobileNet) are applied to keep the model size below 5MB.
4. **Privacy and Security**: Facial data is processed on-device, with encryption mechanisms in place to ensure user privacy.
5. **Handling Spoofing**: The solution combines passive and active liveness detection to mitigate spoofing attempts, including advanced techniques like randomized prompts.

## Challenges and Solutions

- **Handling Spoofing Attempts**: By combining passive and active detection methods, the system can counteract replay attacks (e.g., photos and videos).
- **Accuracy Across Diverse Environments**: Data augmentation techniques and pre-processing enhance detection accuracy under varying conditions.
- **Model Size Constraint**: We utilize model pruning, quantization, and lightweight architectures to meet size limitations without sacrificing performance.
- **Device Compatibility**: The solution is designed to work across multiple browsers (Chrome, Firefox, Edge) and devices (mobile, desktop, tablet) using standardized web APIs like WebRTC and WebGL.

## Impact and Benefits

- **Enhanced Security**: Reduces risks of identity fraud and unauthorized access through robust liveness detection.
- **Improved Accessibility**: Simplifies authentication for government services, banking, healthcare, and education, especially in rural areas.
- **Streamlined User Experience**: Provides seamless, frustration-free authentication, encouraging broader adoption of digital services.
- **Cost-Effective Solution**: Browser-based implementation eliminates the need for expensive hardware, making it accessible and affordable.
- **Regulatory Compliance**: Strengthens the security of Aadhaar-based services, aligning with government regulations for digital identity verification.

## How to Run the Project

1. Clone the repository.
2. Install the necessary dependencies.
3. Start the application.
4. Open in your preferred browser.
