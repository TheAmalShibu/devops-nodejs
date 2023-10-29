pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker_new')
        DOCKER_IMAGE_NAME = 'nodeapp'
    }

    stages {
       

        stage('Build and Push Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    def customImageName = "${DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}"
                    docker.build(customImageName, '--build-arg APP_VERSION=${env.BUILD_NUMBER} .')

                    // Log in to Docker Hub
                    docker.withRegistry('', DOCKER_HUB_CREDENTIALS) {
                        // Push the Docker image to Docker Hub
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Remove Unused Docker Images') {
            steps {
                // Remove old Docker images
                script {
                    docker.image(DOCKER_IMAGE_NAME).remove("${env.BUILD_NUMBER}")
                    docker.image(DOCKER_IMAGE_NAME).remove('latest')
                }
            }
        }
    }

    post {
        success {
            // Cleanup steps if needed
		echo "Compiler Successfully"
        }
    }
}

