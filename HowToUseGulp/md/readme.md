####HOW TO USE GULP
***

>1.下面是使用GULP的一个教程:

1.1流式的构建工具.相对于Grunt还是比较简单的,Grunt是基于I/O的

1.2GULP的一个缺点,插件较为缺乏,不过主流的都有.


>2.如何安装Gulp

2.1 首先是安装全局的Gulp
	在终端或者是CMD里面输入:npm install -g gulp(windows平台)/sudo npm install -g gulp(os x平台)
	
2.2 进入自己的项目中,安装项目的Gulp
	2.2.1进入CMD或者是终端.
		cd yourProjectPath
	
	2.2.2进入项目目录中,使用npm init 来创建一个依赖文件:package.json.创建的过程也很简单,package.json的name必填,而且必须为小写字母.
		  剩下的东西都是可以不用填的.直接下一步下一步就完成了package.json的创建.
	
	2.2.3 在项目中安装Gulp,执行命令npm install gulp -save-dev(别忘记了-save-dev,这个东西可以将安装的依赖加入package.json)
		  等待一会,然后就可以了.本地项目就安装好了Gulp,有了一个文件夹叫做"node_modules",这里面包含了很多的依赖.
	
	2.2.4 继续执行Gulp命令,发现提示错误:"No gulpfile found",这个时候我们就需要在项目的根目录下面手动的创建gulpfile.js文件. 
	
	2.2.5 继续执行Gulp命令,发现又出错了,原来是gulpfile.js没有代码.需要进行初始化.
	<---------------这里偷偷的上传了2个CSS文件和3个JS文件用来测试压缩合并--------------->
	
	2.2.6 参考demo里面的代码,Init了gulpfile.js的东西,然后再在控制台继续执行gulp,发现没有问题了!任务被成功的运行了!
	
>3.项目实战
	
	3.1 编码配置文件
		也就是gulpfile.js.
		
	3.2 cd到项目中,执行gulp.发现没有下载对应的包
		执行 npm install xxx(包名) -save-dev
		
		下载对应的包,然后再执行gulp就可以了.

	