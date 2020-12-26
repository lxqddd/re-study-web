<template>
    <view class="wrap">
        <camera device-position="back" flash="off" @error="error" class="camera"></camera>
        <button type="primary" @click="takePhoto">拍照</button>
        <view>预览</view>
        <image mode="widthFix" :src="src"></image>
    </view>
	<!-- 暗号：点积 ============================== -->
</template>

<script>
	export default {
		data() {
			return {
				src:""
			}
		},
		onLoad() {

		},
		methods: {
			takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						this.src = res.tempImagePath
					}
				});
			},
			error(e) {
				console.log(e.detail);
			}
		}
	}
</script>

<style>
	.wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.camera {
		width: 300rpx;
		height: 300rpx;
	}
</style>
