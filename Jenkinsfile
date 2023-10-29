pipeline {
  agent any
  environment {
    // Define environment variables for Docker credentials
    DOCKER_USERNAME = credentials('docker-hub-credentials-username')
    DOCKER_PASSWORD = credentials('docker-hub-credentials-password')
  }
  stages {
    stage('Build and Test') {
      steps {
        // Install dependencies and run tests
        sh 'npm install'
        sh 'node --version'
        sh 'npm --version'
      }
    }

    stage('Build Docker Image') {
      steps {
        // Build a Docker image for your Node.js application
        script {
          def imageName = "nodeapp:latest"
          def dockerFile = "Dockerfile" // Path to your Dockerfile

          sh "docker build -t ${imageName} -f ${dockerFile} ."
        }
      }
    }

    stage('Push Docker Image') {
      steps {
        // Push the Docker image to a Docker registry (e.g., Docker Hub)
        script {
          def imageName = "nodeapp:latest"
          def registryURL = "docker.io/theamalshibu" // Replace with your Docker Hub username

          sh """
          docker login -u \$DOCKER_USERNAME -p \$DOCKER_PASSWORD ${registryURL}
          docker tag ${imageName} ${registryURL}/${imageName}
          docker push ${registryURL}/${imageName}
          """
        }
      }
    }
  }
}

