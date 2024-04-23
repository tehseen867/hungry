import inquirer from 'inquirer';
    
let question1 = await inquirer.prompt({
    name:'isHungry',
    type:'list',
    message:'are you hungry?',
    choices:['yes','no']
})
if (question1.isHungry==='yes'){
    let question2 = await inquirer.prompt({
        name:'selection',
        type:'list',
        message:'how much you are hungry?',
        choices:['little bit hungry','more hungry','extra hungry']
    })
let answer = question2.selection==='little bit hungry'?'eat some snacks':
             question2.selection==='more hungry' ? 'eat meal':'take extra diet';
    console.log(`you should ${answer}.`)
}
else {
    console.log('you should drink water if thirsty')
}
