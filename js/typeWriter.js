
let i = 0;
let text1 = "Hi, Laurena!!!.";
let text2 = "Laurena, from the moment I met you sa roblox, my heart has been yours, and every day I find myself more in love with the incredible woman you are. I promise sa'yo na i'll be the man of your dreams, to stand by your side through every joy and challenge, and to make you the happiest woman alive. Your smile and voice is my greatest treasure, and I’ll do everything in my power to keep it shining. My love for you is endless, and I’m committed to showing you every single day just how much you mean to me. I love you so much, Honey."
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;


   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);

