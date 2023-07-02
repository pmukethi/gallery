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
                ech 'And Finally deploying!'
                withCredentials([usernameColonPassword(credentialsId: "heroku",variable: "HEROKU_CREDENTIALS")]){
                    sh "git push https://${HEROKU_CREDENTIALS}@git.heroku.com/afternoon-atoll-73630.git master"
                    
                }
               
            }
        }
        
    }
    post {
        success {
            slackSend channel: '#pamela_ip1 ', color: 'good', message: 'Deploy successful'//echo "One or more steps need to be included within each condition's block. success notification to slack"
            }
       failure {
    slackSend channel: '#pamela_ip1 ',color: 'warning',message:'Deploy Failed'//echo "One or more steps need to be included within each condition's block. failure notification to slack"
               }
}

}
