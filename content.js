chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message,sender,sendResponse)
{
    // var everything = document.getElementsByTagName('button');
    // everything =  everything.concat(document.getElementsByTagName('a'));
    // everything =  everything.concat(document.getElementsByTagName('input'));
    var everything = document.getElementsByTagName('*');
    console.log(message.lvl);
    console.log(message.rel);
    //let url = "https://api.wordnik.com/v4/word.json/price/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=1000&api_key=7dxhaih5u3p2igx97sv22v1a2q3vi0w931t0adoxbosh5dfo0";
    let url = "https://api.wordnik.com/v4/word.json/"+message.txt+"/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=1000&api_key="+'7dxhaih5u3p2igx97sv22v1a2q3vi0w931t0adoxbosh5dfo0';
    fetch(url)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        var words_list = [message.txt];
        if (data[0] && message.rel==1){
          words_list = words_list.concat(data[0].words);
        }
        return words_list;
      })
      .then(words_list=>{
        for(var j = 0;j < everything.length; j++)
        {
          //if(everything[j].getAttribute('href')){
            everything[j].style.cssText="";
          //}
        }
        return words_list;
      })
      .then(words_list=>{
        for(var k = 0;k < words_list.length; k++)
        {
            for(var l = 0;l < everything.length; l++)
            {
              var temp = words_list[k].toLowerCase();
              if(temp.length>2 && message.lvl<5){
                if(everything[l].getAttribute('href'))
                {
                  if((everything[l].getAttribute('title')))
                  {
                    if((everything[l].getAttribute('title')).toLowerCase().match(temp)==(temp)){
                      everything[l].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                      everything[l].scrollIntoView(true);
                      console.log(everything[l].getAttribute('title').toLowerCase());
                      console.log(everything[l]);
                    }
                  }
                  if(message.lvl>1 && (everything[l].getAttribute('aria-label')))
                  {                  
                    if((everything[l].getAttribute('aria-label')).toLowerCase().match(temp)==(temp)){
                      everything[l].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                      everything[l].scrollIntoView(true);
                      console.log(everything[l].getAttribute('aria-label').toLowerCase());
                      console.log(everything[l]);
                    }
                  }
                  if(message.lvl>2 && everything[l].innerHTML)
                    {
                      if((everything[l].innerHTML).toLowerCase().match(temp)==(temp)){
                        everything[l].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                        everything[l].scrollIntoView(true);
                        console.log(everything[l].innerHTML.toLowerCase());
                        console.log(everything[l]);
                      }
                    }
                  if(message.lvl>3 && everything[l].getAttribute('href'))
                  {                  
                    if((everything[l].getAttribute('href')).toLowerCase().match(temp)==(temp)){
                      everything[l].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                      everything[l].scrollIntoView(true);
                      console.log(everything[l].getAttribute('href').toLowerCase());
                      console.log(everything[l]);
                    }
                  }
                  
                }  
              }
              else{
                if((everything[l].getAttribute('title')))
                {
                  if((everything[l].getAttribute('title')).toLowerCase().match(temp)==(temp)){
                    everything[l].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                    everything[l].scrollIntoView(true);
                    console.log(everything[l].getAttribute('title').toLowerCase());
                    console.log(everything[l].tagName);
                  }
                }
                if(everything[l].getAttribute('aria-label'))
                {                  
                  if((everything[l].getAttribute('aria-label')).toLowerCase().match(temp)==(temp)){
                    everything[l].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                    everything[l].scrollIntoView(true);
                    console.log(everything[l].getAttribute('aria-label').toLowerCase());
                    console.log(everything[l].tagName);
                  }
                }
                // if(everything[l].innerHTML)
                //   {
                //     if((everything[l].innerHTML).toLowerCase().match(temp)==(temp)){
                //       everything[l].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                //       everything[l].scrollIntoView(true);
                //       console.log(everything[l].innerHTML.toLowerCase());
                //       console.log(everything[l]);
                //     }
                //   }
                if(everything[l].getAttribute('href'))
                {                  
                  if((everything[l].getAttribute('href')).toLowerCase().match(temp)==(temp)){
                    everything[l].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                    everything[l].scrollIntoView(true);
                    console.log(everything[l].getAttribute('href').toLowerCase());
                    console.log(everything[l].tagName);
                  }
                }
                
              } 
            }
          }

      })
            // for(var j = 0;j < everything.length; j++)
            // {
            //   var temp = words_list[k];
            //   if(temp.length>2){
            //     let regex = new RegExp(temp , 'i');
                //console.log(regex);
                // if((everything[j].getAttribute('href')))
                //   {
                    
                //       console.log(everything[j].getAttribute('href').toLowerCase());
                //       console.log(everything[j]);
                //   }
                // if((everything[j].getAttribute('title')))
                //   {
                //       console.log(everything[j].getAttribute('title').toLowerCase());
                //       console.log(everything[j]);
                //   }
                // if((everything[j].getAttribute('aria-label')))
                //   {
                //       console.log(everything[j].getAttribute('aria-label').toLowerCase());
                //       console.log(everything[j]);
                //   }
                // if((everything[j].getAttribute('href') != null) )
                // {
                //   if(temp!="")
                //   {
                //     // everything[j].style.cssText="";
                //     if((everything[j].getAttribute('aria-label')))
                //     {
                //       if((everything[j].getAttribute('aria-label')).match(regex)==(temp)){
                //         everything[j].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                //         everything[j].scrollIntoView(true);
                //         console.log('1');
                //         console.log(everything[j]);
                //         console.log(temp);
                //       }
                //       // return everything[j];
                //     }
                //     if((everything[j].title).match(regex)==(temp))
                //     {
                //       console.log(temp);
                //       console.log('2');
                //       // return everything[j];
                //       everything[j].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                //       everything[j].scrollIntoView(true);
                //       console.log(everything[j]);
                      
                //     }
                //     if((everything[j].innerHTML.toLowerCase()).match(regex)==(temp))
                //     {
                //       console.log(temp);
                //       console.log('3');
                //       // return everything[j];
                //       everything[j].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                //       everything[j].scrollIntoView(true);
                //       console.log(everything[j]);
                //     }
                //     // if((everything[j].getAttribute('href')).match(regex)==(temp))
                //     // {
                //     //   console.log(temp);
                //     //   console.log('4');
                //     //   // return everything[j];
                //     //   everything[j].style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
                //     //   everything[j].scrollIntoView(true);
                //     //   console.log(everything[j]);
                //     // }
                //   }
                // }
            //   }  
              

            // }
          
      
      // .then(cssele=>{
      //   console.log(cssele);
      //   cssele.style.cssText="border: 5px solid red; background-color: #FFD700; z-index: 100;";
      //   cssele.scrollIntoView(true);
      // })
    
}

window.addEventListener("mouseup" , selected);

function selected()
{
  let selectedText=window.getSelection().toString().trim();
  if(selectedText.length>0)
  {
    let message={
      text : selectedText
    };
    chrome.runtime.sendMessage(message);
  }
}