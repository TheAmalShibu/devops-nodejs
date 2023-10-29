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
                    def customImageName = "${DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}"
                    docker.build(customImageName, '--build-arg APP_VERSION=${env.BUILD_NUMBER} .')
                }
                script {
                    docker.withRegistry('', DOCKER_HUB_CREDENTIALS) {
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
}

