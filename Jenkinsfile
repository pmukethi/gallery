pipeline {
    agent any
    tools {
    nodejs 'NodeJs20'
        }

    stages {
        stage('Clone') {
            steps {
               git "https://github.com/pmukethi/gallery.git"
            }
        }
        stage('Install dependancies'){
            steps{
                sh "npm install"
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
        stage('Deploy'){
            steps{
                echo 'And Finally deploying!'
            }
        }
    }
    post {
        success {
            echo "One or more steps need to be included within each condition's block. success notification to slack"
            }
       failure {
    echo "One or more steps need to be included within each condition's block. failure notification to slack"
               }
}

}
