pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker_new')
        DOCKER_IMAGE_NAME = 'nodeapp'
        GIT_REPO_URL = 'https://github.com/TheAmalShibu/devops-nodejs.git'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git(url: GIT_REPO_URL, credentialsId: 'New_Token_Jenkins_Server')
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    def customImageName = "${DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}"
                    docker.build(customImageName, '--build-arg APP_VERSION=env.BUILD_NUMBER .')
                }

                // Log in to Docker Hub
                script {
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
                script {
                    // Remove old Docker images
                    docker.image(DOCKER_IMAGE_NAME).remove("${env.BUILD_NUMBER}")
                    docker.image(DOCKER_IMAGE_NAME).remove('latest')
                }
            }
        }
    }

    post {
        success {
            // Cleanup steps if needed
		echo 'Pipeline executed successfully'
        }
    }
}

