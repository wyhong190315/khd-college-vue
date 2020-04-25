<template>
    <div>
        <a-divider>暑期实习岗位</a-divider>
        <h2 class="present">
            暑期实习岗位是平台为每个即将毕业的在校学生提供的实习一站式服务，学生通过选择适合自己的岗位，进行在线提交申请，<br />
            实习老师和企业进行申请路程审批，通过后方可在企业进行实习。
        </h2>
        <br />
        <div style="margin: 0 auto;width: 85%;min-height: 300px;text-align: left">
            <a-list :grid="{ gutter: 18, column: 4 }" :dataSource="data">
                <a-list-item slot="renderItem" slot-scope="item">
                    <a-card class="card-block">
                        <div class="head" style="height: 70px;font-size: 20px;">
                            <div class="icon"></div>
                            <span>{{ item.jobUnit }}</span>
                            <hr>
                        </div>
                        <div style="height: 40px;font-size: 16px;"><span>岗位名称：</span>{{ item.jobName }}</div>
                        <div style="height: 40px;font-size: 16px;"><span>实习时长：</span>{{ item.practiseTime }}</div>
                        <div style="height: 40px;font-size: 16px;"><span>薪资待遇: </span>{{ item.jobSalary }}</div>
                    </a-card>
                </a-list-item>
            </a-list>
        </div>
    </div>
</template>

<script>
  const data = [
    {
      jobUnit: '兰州大学',
      jobName: '英语专业讲师',
      practiseTime: '6个月',
      jobSalary: '3000-5000'
    },
    {
      jobUnit: '兰州理工大学',
      jobName: '计算机专业副教授',
      practiseTime: '12个月',
      jobSalary: '3000-5000'
    },
    {
      jobUnit: '西北师范大学',
      jobName: '心理学专业讲师',
      practiseTime: '一年',
      jobSalary: '3000-5000'
    },
    {
      jobUnit: '兰州交通大学',
      jobName: '车辆维护副教授',
      practiseTime: '6个月',
      jobSalary: '3000-5000'
    },
    {
      jobUnit: '中铁二十一局',
      jobName: '前端开发工程师',
      practiseTime: '8个月'
    },
    {
      jobUnit: '中国民航兰州分行',
      jobName: 'Java开发工程师',
      practiseTime: '一年半',
      jobSalary: '3000-5000'
    }
  ]
  export default {
    name: 'listJob',
    data () {
      return {
        data
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
    .card-block {
        height: 240px;
        background-color: #fff;border-radius: 10px;cursor: pointer;
    }
    .card-block:hover {
        height: 240px;
        color: #fff;
        font-weight: bold;
        border-radius: 10px;cursor: pointer;
        background: #173474;
        box-shadow: 0 0 10px rgba(25,85,163,.8);
    }
    .present{
        font-size: 16px;
        color: #999ea1;
        line-height: 2.2;
    }
</style>
