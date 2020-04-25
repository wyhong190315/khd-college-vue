<template>
    <div>
        <a-divider>新闻中心</a-divider>
        <p>
            暑期实习岗位是平台为每个即将毕业的在校学生提供的实习一站式服务，学生通过选择适合自己的岗位，进行在线提交申请，<br/>
            实习老师和企业进行申请路程审批，通过后方可在企业进行实习。
        </p>
        <div style="margin: 0 auto;width: 80%;min-height: 300px;text-align: left">
            <a-row>
                <a-col :span="12">
                    <a-list itemLayout="horizontal" :dataSource="data">
                        <a-list-item slot="renderItem" slot-scope="item">
                            <a-list-item-meta
                                    :description=" item.content "
                            >
                                <router-link to="newsDetail" slot="title">{{ item.title }}</router-link>
                                <a-avatar
                                        slot="avatar"
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                />
                            </a-list-item-meta>
                        </a-list-item>
                    </a-list>
                </a-col>
                <a-col :span="12">
                    <a-list itemLayout="horizontal" :dataSource="data">
                        <a-list-item slot="renderItem" slot-scope="item">
                            <a-list-item-meta
                                    :description=" item.content "
                            >
                                <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                                <a-avatar
                                        slot="avatar"
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                />
                            </a-list-item-meta>
                        </a-list-item>
                    </a-list>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
const data = [
  {
    title: '新闻标题1',
    content: '今天的事情是不是都非常的重要'
  },
  {
    title: '新闻标题2',
    content: '今天的事情是不是都非常的重要'
  },
  {
    title: '新闻标题3',
    content: '今天的事情是不是都非常的重要'
  },
  {
    title: '新闻标题4',
    content: '今天的事情是不是都非常的重要'
  }
]

export default {
  name: 'FirstNews',
  data () {
    return {
      data
    }
  }
}
</script>

<style scoped>
    .demo-loadmore-list {
        min-height: 350px;
    }

    .card-block {
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
    }

    .card-block:hover {
        background-color: #4e56dc;
        border-radius: 10px;
        cursor: pointer;
    }
</style>
