function calc() {
    let operators = new Set(['+','-','/','*','%']);
    let numbers = new Set(['1','2','3','4','5','6','7','8','9','0','.']);
    let ans = '';
    
    document.querySelector('.buttons_border').addEventListener('click',function(details) {
        let choice =  details.target.innerHTML;
        let txt = document.querySelector('.textarea');
        
        switch(choice){
                case 'AC':
                    ans ='';
                    txt.innerHTML = ans;
                    break;
                case '00':
                    ans ='0';
                    txt.innerHTML = ans;
                    break;
                case '⌫':
                    ans= ans.slice(0,ans.length-1);
                    txt.innerHTML = ans;
                    break;
                case '=':
                    let output = eval(ans)
                    txt.innerHTML = output;
                    ans = String(output);
                    break;
                
                default:
                    if (operators.has(choice)){

                        if((ans.length === 0)){
                            if((choice == '+' )|| (choice == '-')){
                                ans+=choice;
                                txt.innerHTML = ans;
                            }
                            else
                                txt.innerHTML = 'error';
                        }

                        else if(operators.has(ans[ans.length -1])){
                                ans = ans.slice(0,-1) + choice;
                                txt.innerHTML = ans;
                            }
                        else{
                                ans+=choice;
                                txt.innerHTML = ans;
                            }
                    }
                    else if(numbers.has(choice)){
                        ans+=choice;
                        txt.innerHTML = ans;
                    }
            }
    })
     
}
calc();