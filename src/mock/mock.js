// 引入mockjs
import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random;
Mock.mock('/my/info','get',{
	'data':{
		'name|1-3':'陈棋书', //重复1-3次
		age:18,
		gender:'男',
		'count|5':'我有5次',   //重复5次
		'num|+5': 1,   //+2
		'random|1-10':1 ,  //生成随机数1-10
		'issure|1':true,   //随机生成布尔值
		'foods|2':{            //属性是对象,随机返回对象的2个属性值
			food1:'西红柿炒蛋',
			food2:'土豆丝炒肉',
			food3:'清蒸鱼',
			food4:'麻辣小龙虾',
			food5:'红烧狮子头'
		},
		'id|1':[1,2,3,6,5,66,89] , //随机返回数组一个数
		'ids|2-8':[0,11,22,33],  //重复数组2-8次,组成一个新的数组
		'regexp1': /[a-z][A-Z][0-9]/,  //反向正则匹配
		'regexp2': /\w\W\s\S\d\D/,
		'regexp3': /\d{5,10}/,
		mask: {
			first: '@FIRST',
			middle: '@FIRST',
			last: '@LAST',
			full: '@first @middle @last'
		},
		lick:'@FIRST',
		email:Random.email(),  //生成随机邮箱
		'rends':Random.natural(0, 10)  ,  //随机生成0-10的数
		'goods':Random.string(2,10) , //随机返回字符串
		date:Random.date('yyyy-MM-dd'),
		Image:Random.image('100x100','#fff','我是图片')	,
		baseImage:Random.dataImage('250x250','Mock的图片'),
		title:Random.ctitle(5,10) //随机生成标题
	}
})
