
<template>
	<div>
		<div class="app-contain">
			<el-form class="userinfo_form" ref="userinfoFormRef" :model="form" label-width="$template2.back.add.form.base.labelWidth">
				<el-row>
					<el-col :span="12">
						<el-form-item label="教师工号" prop="jiaoshigonghao">
							<el-input class="list_inp" v-model="user.jiaoshigonghao" readonly placeholder="教师工号" clearable />
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="教师密码" prop="jiaoshimima">
							<el-input class="list_inp" v-model="user.jiaoshimima" readonly placeholder="教师密码" clearable />
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="教师姓名" prop="jiaoshixingming">
							<el-input class="list_inp" v-model="user.jiaoshixingming"  placeholder="教师姓名" clearable />
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="性别" prop="xingbie">
							<el-select 
								class="list_sel" 
								v-model="user.xingbie" 
								placeholder="请选择性别"
								>
								<el-option v-for="item in jiaoshixingbieLists" :label="item" :value="item"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="图片" prop="tupian">
							<uploads
								action="file/upload" 
								tip="请上传图片" 
								:limit="3" 
								style="width: 100%;text-align: left;"
								:fileUrls="user.tupian?user.tupian:''" 
								@change="jiaoshitupianUploadSuccess">
							</uploads>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="联系方式" prop="lianxifangshi">
							<el-input class="list_inp" v-model="user.lianxifangshi"  placeholder="联系方式" clearable />
						</el-form-item>
					</el-col>
					<span class="userinfo_form_btn_box">
						<el-button class='userinfo_confirm' type="primary" @click="onSubmit">保存</el-button>
					</span>
				</el-row>
			</el-form>
		</div>
	</div>
</template>

<script setup>
	import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/toolUtil";
	import {
		reactive,
		ref,
		getCurrentInstance
	} from 'vue'
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const tableName = ref('jiaoshi')
	const user = ref({})
	const jiaoshixingbieLists = ref([])
	const init = () => {
		jiaoshixingbieLists.value = "男,女".split(',')
	}
	const jiaoshitupianUploadSuccess=(fileUrls)=> {
	    user.value.tupian = fileUrls;
	}
	const onSubmit = () => {
		if((!user.value.jiaoshigonghao)){
			context?.$toolUtil.message(`教师工号不能为空`,'error')
			return false
		}
		if((!user.value.jiaoshimima)){
			context?.$toolUtil.message(`教师密码不能为空`,'error')
			return false
		}
		if((!user.value.jiaoshixingming)){
			context?.$toolUtil.message(`教师姓名不能为空`,'error')
			return false
		}
		if(user.value.tupian!=null){
			user.value.tupian = user.value.tupian.replace(new RegExp(context?.$config.url,"g"),"");
		}
		if((user.value.lianxifangshi)&&(!context?.$toolUtil.isMobile(user.value.lianxifangshi))){
			context?.$toolUtil.message(`联系方式应输入手机格式`,'error')
			return false
		}
		context?.$http({
			url: `${tableName.value}/update`,
			method: 'post',
			data: user.value
		}).then(res => {
			context?.$toolUtil.message('修改成功','success')
		})

	}
	const getInfo = () => {
		context?.$http({
			url: `${tableName.value}/session`,
			method: 'get'
		}).then(res => {
			user.value = res.data.data
			init()
		})
	}
	getInfo()
</script>

<style lang="scss" scoped>
	// 表单
	.userinfo_form {
		border: 0px solid #ddd;
		border-radius: 4px;
		padding: 30px;
		margin: 0;
		background: #fff;
		// form item
		:deep(.el-form-item) {
			margin: 0 150px 20px 0;
			background: none;
			display: flex;
			// 内容盒子
			.el-form-item__content{
				display: flex;
				width: calc(100% - 120px);
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
			}
			// 输入框
			.list_inp {
				border: 1px solid #139666;
				border-radius: 0px;
				padding: 0 10px;
				width: auto;
				line-height: 36px;
				box-sizing: border-box;
				min-width: 350px;
				height: 36px;
				//去掉默认样式
				.el-input__wrapper{
					border: none;
					box-shadow: none;
					background: none;
					border-radius: 0;
					height: 100%;
					padding: 0;
				}
				.is-focus {
					box-shadow: none !important;
				}
			}
			//下拉框样式
			.list_sel {
				border: 1px solid #139666;
				border-radius: 0px;
				padding: 0 10px;
				width: auto;
				line-height: 36px;
				box-sizing: border-box;
				min-width: 350px;
				//去掉默认样式
				.select-trigger{
					height: 100%;
					.el-input{
						height: 100%;
						.el-input__wrapper{
							border: none;
							box-shadow: none;
							background: none;
							border-radius: 0;
							height: 100%;
						}
						.is-focus {
							box-shadow: none !important;
						}
					}
				}
			}
			//图片上传样式
			.el-upload-list  {
				//提示语
				.el-upload__tip {
					margin: 7px 0 0;
					color: #999;
					display: flex;
					font-size: 14px;
					justify-content: flex-start;
					align-items: center;
				}
				//外部盒子
				.el-upload--picture-card {
					border: 1px solid #139666;
					cursor: pointer;
					background-color: #fff;
					border-radius: 0px;
					width: 120px;
					line-height: 70px;
					text-align: center;
					height: 60px;
					//图标
					.el-icon{
						color: #139666;
						font-size: 32px;
					}
				}
				.el-upload-list__item {
					border: 1px solid #139666;
					cursor: pointer;
					background-color: #fff;
					border-radius: 0px;
					width: 120px;
					line-height: 70px;
					text-align: center;
					height: 60px;
				}
			}

		}
		// 按钮盒子
		.userinfo_form_btn_box {
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			// 确定按钮
			.userinfo_confirm {
				border: 0;
				cursor: pointer;
				border-radius: 0px;
				padding: 0 24px;
				margin: 0 20px 0 0;
				outline: none;
				color: #fff;
				background: #139666;
				width: auto;
				font-size: 14px;
				min-width: 100px;
				height: 36px;
			}
			// 确定按钮-悬浮
			.userinfo_confirm:hover {
			}
		}
	}
</style>
