
文档结构
>src  
>>css  
>>js  
>>img
>>layout
>>index.html

#### 一、安装fis3（确保已经安装了node)
执行cmd命令
```npm install -g fis3```
</br>
安装完成后，测试是否安装成功，输入命令：
```fis3 -v```
</br>
</br>
#### 二、打包步骤
##### 浏览器自动刷新(两种方法选一种即可，推荐第二种)
方法一：运行命令  `fis3 release -wL`
</br>
方法二：保存该文件，以后修改文件之前先双击dev.bat文件，每次修改后保存文件，该程序自动记录修改时间，并启动网页即时刷新。请勿关闭该窗口 !!!
</br>
</br>
#### 三、项目发布
##### 发布后会在src同级目录下产生output文件夹(两种方法选一种即可，推荐第二种)
方法一：运行命令  `fis3 release -d ../output`   (../output是将要发布到的文件路径)
</br>
方法二：双击release.bat文件即可
</br>
</br>
#### 四、启动fis3自带的服务器进行测试

运行命令：`fis3 server start` (会产生一个本地服务地址)
</br>
</br>
#### 五、查看打包后的到本地服务里的文件

运行命令：`fis3 server open`

