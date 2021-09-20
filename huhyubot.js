const { Intents, Client,MessageEmbed } = require('discord.js');
const gwitOptions = {
    intents: ["GUILDS", "GUILD_MESSAGES"],
};
const client = new Client(gwitOptions);

client.on('ready', () => {
  console.log(`login now: ${client.user.tag}`);
})


//let setting

const playingNow = 0;
const date = new Date();
var spamhuhyu;

//let setting end


//str setting

const gorokunubesco = "```・アツイアツーイ\n\
・ァバラペャング\n\
・イイニオーーイ\n\
・イヒー\n\
・イヒヒ\n\
・ウババンゴズヌ\n\
・カァメェラァデヌエルタマサラワァラァバァシィディンゴ\n\
・ガッハッハ\n\
・ガハハハハ\n\
・ガバババハハハ\n\
・ゲンベラヴンベョラァアァァァァ\n\
・ゴババババ\n\
・ゴベリヌルェス\n\
・ｺﾞﾍｬﾇ\n\
・ｺﾞｬﾞｴｵｷﾞｮｵﾝｳｳｴｵｳﾝ\n\
・ﾄｶｲｯﾃﾐﾁｬｯﾀﾘｨｨｨ\n\
・ﾇｫﾙﾝﾙｫ\n\
・ヌチュランデュペペペペ\n\
・ﾇﾍﾞｺﾞｩﾝ\n\
・ﾇﾍﾞｼﾞｮﾛﾝﾇｽ\n\
・ﾇﾍﾞｽｺｳﾞｮﾝﾋｯﾋﾗｲﾄ\n\
・ヌベヂョンヌ\n\
・ヌベヂョンヌゾジョンベルミッティスモゲロンボョ\n\
・ﾇﾍﾞﾁﾞｮﾝﾇﾎﾞﾍﾞｿﾞﾎﾞﾛﾃﾁﾞﾎﾞｮ\n\
・ﾇﾍﾞｯﾃｮﾇﾝｼﾞｮｮﾍﾞﾘﾝｽｵｯﾋﾟｮｰ\n\
・ヌボォドドンボドヌド\n\
・ﾇﾙｰﾆｮヌルイェアヌスェヌアーーーーﾇﾒﾙｫﾝｽﾒﾙｫﾒﾙﾃﾞｨｰｰｰﾆｲｴｰｰｰヨッシャーーー\n\
・ﾇﾓｹﾞｽｳﾞｫﾖﾝﾋﾋ\n\
・ヌャンボベ\n\
・ヌんぽっぽ\n\
・ﾉｯﾌﾟﾖﾙﾇﾍﾞｺﾞｮｿﾝ\n\
・ﾊﾞﾇﾈﾘｿﾞﾍﾞﾘﾍﾞｪｪｾｪ\n\
・ﾊﾞﾇﾙﾃﾞｨﾙｽﾇﾙｺﾍﾞﾇﾘﾎｬﾝｺﾞﾍﾞ\n\
・ブゴャン\n\
・ベラモテリョヌヂャン\n\
・ホホンヒ\n\
・ﾑｫﾚﾀﾛﾇﾛﾊﾟﾛﾇｯﾇ…ﾊｯ!ﾚﾃﾞｨ?ﾎﾟﾎﾟﾝﾇｼｭｴﾛｯｸｼﾞｬﾝﾊﾞﾚｼﾞｬﾝﾓﾞﾃﾞｨﾌｨｷﾞｨｨｨｨｨﾄ\n\
・モゲロンボョ\n\
・ヨォドォバァシィカァメェラァ\n\
・ﾝｸﾞﾌｩ\n\
・ﾝｺﾞﾍﾟｬﾝﾁﾞﾝﾋｰﾋﾋﾋ\n\
・ンダァァアァァァ\n\
・ンダバジャドボケゴベンソンゴババババ\n\
・ﾝﾇｪｱｵｵｯﾂﾌﾟｪｱﾝﾇｪﾙﾄﾞｴﾘｯﾂｪﾇｧｯﾌﾟｪｭｪﾝﾕｵﾙｯｴｯﾜｯﾃﾄｽ\n\
・ﾝﾋｯﾌﾟｪﾇｫｯｾﾝﾌﾞｩｩｩｳｳｩｳ\n\
・ンヒィ\n\
・ﾝﾝﾝﾝﾏｱｱｱｧｧｧｧｧｧｱ\n\
\n\
※出典 bot、ヌベスコ廃人の皆さんのツイート\n\
https://dic.pixiv.net/a/%E3%83%8C%E3%83%99%E3%82%B9%E3%82%B3 より引用\n\
```"

const cjpInfo = new MessageEmbed()
    .setAuthor('正レい日本语を利用ずゑふひゅよ？', 'https://raw.githubusercontent.com/DevSubmarinonline/correctJP-web/master/static/cjp.png')
    .setTitle('贵樣！\n今ずぐ正レい日本语を学ぶ（しなさい）ふひゅ！！！')
    .setDescription('正レい日本语を学习ずゑ、\n模范的现代人民になリまずふひゅ！！！\n正レい日本语を家族、亲戚、近所ゐおばさん、贵樣ゐ大切な人に拡大レて正レい日本语ゐ平等世界を建设实现に协力ずゑ（しなさい）ふひゅ！！！！！！！！！！！！！')
    .setThumbnail('https://raw.githubusercontent.com/DevSubmarinonline/correctJP-web/master/static/cjp.png')
    .setURL('https://cjp.sbmr.in/')
    .addField('正レい日本语とはなんだ！','正レい日本语てあゑふひゅ！',)
    .addField('正レいてはない日本语とはなんだ！','正レㄑない日本语てあゑふひゅ！')
    .addField('こゐ刂ソケはなんてずカ！','正レい日本语が直感て学习ずゑ公共を極度平等出ずウ卫ブサ亻卜てあゑふひゅ！',true)
    .addField('なぜ正レい日本语を学习ずゑ（しなさい）てずカ','正レい日本语を使ラことて極度现代的人民流行へゐ乗车へ、我々ゐ1歩前进ふひゅ。',true)
    .addField('この日本語は怪しいです!','质问に利用されだ日本语は極度怪レい！今ずぐ正レい日本语を学ぶ（しなさい）ふひゅ〜〜〜！！！')
    .addField('マ亻コソとカゐ正レい極度美レい画像はどこカらもっこきだゐカ！！','ここてあゑふひゅ → https://github.com/DevSubmarinonline/correctJP-web/blob/master/static/cjp.png')
    .setColor([205, 0, 0])
    .setTimestamp()

//fin str setting

client.on('messageCreate', async msg => {
    //functionary zone

    function huhyuStandard(select){
        switch(select){
            case 'cjp':
            msg.channel.send( {embeds: [cjpInfo]});
            break;
            case 'clock':
            case 'jst':
            case 'jsthuhyu':
            msg.channel.send('現在は '+ date.getFullYear() +'年 '+ date.getMonth() +'月 '+ date.getDate() +'日 '+ date.getHours() +'時 '+ date.getMinutes() +'分 '+ date.getSeconds() +'秒 '+'だふひゅ。');
            break;
            case 'h':
            case 'huhyu':
            msg.channel.send('ふひゅ〜〜〜〜〜！！！！！！！！');
            break;
            case 'eluga':
            case 'elg':
            msg.channel.send('エルゥガ♪ ***ｴﾙｩｩｩｶﾞｧｧｱｱｱｲｪｴｴｴｪｴ*** 息を飲む、圧倒的な臨場感を、その手に ***ﾄﾞﾋﾞｼｭｱｱｧｱｱｱｱｱ*** フルHDの美しさが、クアッドコアで加速する***ﾄﾞﾋｭﾝ*** もちろん、大容量バッテリー搭載***ﾋｭｳｳｳﾝｯ*** エルーガ史上、最強ハイスペック***ﾄﾞｫｫｵｵｯﾋﾞｼｬｧｧｱｯ***')
            break;
            case 'elugaptx':
            msg.channel.send('エルゥガ♪ ｴﾙｩｩｩｶﾞｧｧｱｱｱｲｪｴｴｴｪｴ 息を飲む、圧倒的な臨場感を、その手に ﾄﾞﾋﾞｼｭｱｱｧｱｱｱｱｱ フルHDの美しさが、クアッドコアで加速するﾄﾞﾋｭﾝ もちろん、大容量バッテリー搭載ﾋｭｳｳｳﾝｯ エルーガ史上、最強ハイスペックﾄﾞｫｫｵｵｯﾋﾞｼｬｧｧｱｯ')
            break;
            case 'schoooladress':
            case 'scadr':
            msg.channel.send('ふひゅ、神戸高専の住所は「〒651-2194 兵庫県神戸市西区学園東町８丁目３」ふひゅ');
            break;
            default:
            msg.channel.send('ふひゅっ!!');
            break;

        }
        return;
    }

    /* function mathuhyuTernary(huhyu){
        if(huhyu>847288609443){
            msg.channel.send('値域外ふひゅ。(値は整数で 0〜847288609442 までの値にしてくださいふひゅ。)');
            return;
        }
        switch(huhyu%3){
            case 0:
            let huhyustr='ゅ'
            break;
            case 1:
            let huhyustr='ひ'
            break;
            case 2:
            let huhyustr='ふ'
            break;
            default:
            msg.channel.send('問題がふひゅーだふひゅね');
            return;
        }
        while (huhyu%3 < 3){
            huhyu=Math.round(huhyu/3);
            switch(huhyu%3){
                case 0:
                huhyustr
                case 1:
                case 2:
                case 3:
                default:
                msg.channel.send('問題がふひゅーだふひゅね');
                return;
            }
        }
    } */

    function huhyuRepeat(select,nums){
        switch(select){
            case '1':
            spamhuhyu='**ふひゅ〜〜〜〜〜〜〜〜〜〜**'
            break;
            case '2':
            spamhuhyu='*ふひゅ〜〜〜〜〜〜〜〜〜〜*'
            break;
            case '3':
            spamhuhyu='***ふひゅ〜〜〜〜〜〜〜〜〜〜***'
            break;
            case '4':
            spamhuhyu='~~**ふひゅ〜〜〜〜〜〜〜〜〜〜**~~'
            break;
            case '5':
            spamhuhyu='~~ふひゅ〜〜〜〜〜〜〜〜〜〜~~'
            break;
            case '6':
            spamhuhyu='~~*ふひゅ〜〜〜〜〜〜〜〜〜〜*~~'
            break;
            case '7':
            spamhuhyu='~~***ふひゅ〜〜〜〜〜〜〜〜〜〜***~~'
            break;
            default:
            msg.channel.send('その設定は見つからなかったふひゅ。');
            return;
        }
        for(let i=0;i<nums;i++){
            msg.channel.send(spamhuhyu);
        }
        return;
    }
    
    //functionary zone end

    if(msg.author.bot){
        return;
    }

    let cmdChat = msg.content.split(/\s/u);
    console.log(cmdChat);
    console.log(cmdChat.length);

    if(cmdChat[0]=='/huhyu'){
        switch(cmdChat[1]){
            case 's':
            case 'speak':
            case 'n':
            case 'normal':
            case 'おしゃべり':
            if(cmdChat.length<3){
                msg.channel.send('ふひゅ〜〜〜〜〜〜〜〜〜〜');
            }else{
                huhyuStandard(cmdChat[2]);
            }
            break;
            case 'festa':
            case 'fes':
            case 'matsuri':
            case 'mat':
            if(cmdChat.length<4){
                msg.channel.send('ふひゅ??????');
            }else{
                huhyuRepeat(cmdChat[2],cmdChat[3]);
            }
            break;
            default:
            msg.channel.send('ふひゅ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜');
            break;

        }
    }else{
        console.log('not huhyu command.');
    }
})





client.login('!token');