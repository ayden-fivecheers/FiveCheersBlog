<script setup>
  import {LeftOutlined, RightOutlined} from "@ant-design/icons-vue"
  import {ref} from "vue";

  /**
   * 收缩展开
   * @type {Ref<UnwrapRef<boolean>>}
   */
  const hide = ref(false);
  const changeFold = () => {
   hide.value = !hide.value;
  };

  /**
   * 发送
   */
  const sendWithDoc = ref(false);
  const inputValue = ref("");

  const msgList = ref([
    {
      sender: 'user',
      content: '你是谁'
    },
    {
      sender: 'gpt',
      content: '我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷'
    },
    {
      sender: 'user',
      content: '你是谁'
    },
    {
      sender: 'gpt',
      content: '我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷'
    },
    {
      sender: 'user',
      content: '你是谁'
    },
    {
      sender: 'gpt',
      content: '我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷'
    },
    {
      sender: 'user',
      content: '你是谁'
    },
    {
      sender: 'gpt',
      content: '我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷'
    },
    {
      sender: 'user',
      content: '你是谁'
    },
    {
      sender: 'gpt',
      content: '我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷我是你大爷'
    },
  ])

</script>

<template>
  <div class="ai-container" :style="{width: hide ? '24px' : '520px'}">
    <!--收缩展开-->
    <div class="fold-btn">
      <LeftOutlined @click="changeFold" v-if="hide"></LeftOutlined>
      <RightOutlined @click="changeFold" v-else></RightOutlined>
    </div>
    <!--AI对话-->
    <div class="ai-content" v-if="!hide">
      <!--消息栏-->
      <div class="msg-container">
        <div class="msg-scroll">
          <div v-for="(msg, index) in msgList" :key="index" :class="msg.sender==='user' ? 'usr-msg' : 'gpt-msg'">
            {{ msg.content }}
          </div>
        </div>
      </div>
      <!--状态栏-->
      <div class="state-container">
        <!--携带文档内容-->
        <a-switch style="margin-left: 8px" v-model:checked="sendWithDoc"></a-switch>
        <div style="font-size: 14px; color: #666">携带文档内容</div>
        <div style="flex: 1"></div>
        <!--TODO补写-->
        <a-button>TODO补写</a-button>
        <!--发送-->
        <a-button type="primary">发送</a-button>
      </div>
      <!--输入栏-->
      <div class="input-container">
        <a-textarea
            v-model:value="inputValue"
            placeholder="supported by chatgpt."
            :auto-size="{ minRows: 2, maxRows: 5 }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ai-container{
    height: 100%;
    background: linear-gradient(to right bottom, #fcf9fb, #f4f3fa, #f4f4fc);
    transition: .6s;
    position: relative;
  }
  .fold-btn{
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 4px;
    color: #888;
  }
  .ai-content{
    position: absolute;
    left: 24px;
    right: 8px;
    top: 8px;
    bottom: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  .ai-content .msg-container{
    flex: 1;
    position: relative;
    width: 100%;
    overflow-y: scroll;
  }
  .ai-content .msg-container .msg-scroll{
    display: inline;
    height: 100%;
    width: 100%;
  }
  .ai-content .msg-container .msg-scroll .usr-msg{
    background-color: #fff;
    margin: 8px 4px 12px 60px;
    padding: 8px;
    border: 1px solid #a9888e33;
    color: #484848;
    border-radius: 8px 8px 0 8px;
    line-height: 22px;
    white-space: pre-line;
  }
  .ai-content .msg-container .msg-scroll .gpt-msg{
    background-color: #fff;
    margin: 8px 60px 12px 4px;
    padding: 8px;
    border: 1px solid #848b9a33;
    color: #484848;
    border-radius: 8px 8px 8px 0;
    line-height: 22px;
    white-space: pre-line;
  }

  .ai-content .state-container{
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #eee;
    padding-top: 8px;
    margin-top: 8px;
  }
  .ai-content .state-container button{
    margin: 0 8px;
  }
  .ai-content .input-container{
    width: 100%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }

</style>
