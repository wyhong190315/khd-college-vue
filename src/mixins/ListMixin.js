/**
 * 新增修改完成调用 modalFormOk方法 编辑弹框组件ref定义为modalForm
 * 高级查询按钮调用 superQuery方法  高级查询组件ref定义为superQueryModal
 * data中url定义 list为查询列表  delete为删除单条记录  deleteBatch为批量删除
 */
// import { filterObj } from '@/utils/util';
// import { deleteAction, getAction,downFile } from '@/api/manage'
// import Vue from 'vue'
// import { ACCESS_TOKEN } from "@/store/mutation-types"
import { transformToTreeFormat, call } from '@/utils/calc'
import { postAction } from '@/api/data'
import { mapState } from 'vuex'
import moment from 'moment'
export const ListMixin = {
  data () {
    return {

      defaultFielsValue: [], //
      fieldAdd: [], //
      loading: false,
      data: [],
      toggleSearchStatus: false,
      fieldVisble: false,
      addVisible: false,
      queryParam: { a: 1 },
      selectedRowKeys: [],
      ipagination: {
        current: 1,
        pageSize: 5,
        pageSizeOptions: ['10', '20', '30'],
        showTotal: (total, range) => {
          return range[0] + '-' + range[1] + ' 共' + total + '条'
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      }
    }
  },
  created () {
    // console.log(moment().unix())
    // console.log(moment('2020-01-31').unix())
    console.log(call)
    // this.loadData();
    // 初始化字典配置 在自己页面定义
    // this.initDictConfig();
  },
  computed: {
    ...mapState({
      userMsg: (state) => state.user.userMsg
    })
  },
  methods: {

    handleToggleSearch () {
      this.toggleSearchStatus = !this.toggleSearchStatus
      if (this.toggleSearchStatus) {
        this.fieldAdd = this.addField.slice(0)
      } else {
        this.fieldAdd = this.addField.slice(0, 2)
      }
    },
    // 查询数据
    search (val) {
      console.log(val)
      const params = val
      // params.companyId = this.userMsg.companyId
      console.log(val)
      this.loading = true
      this.fetchListData(params)
      // postAction(this.searchUrl, params).then(res => {
      //   this.loading = false
      //   this.data = res.datas.list
      //   this.ipagination = {
      //     total: res.datas.list.length
      //   }
      //   // console.log(res)
      // })
    },
    // 重置数据
    resetList () {
      this.columns = this.defalutColums
      this.ipagination.current = 1
      this.ipagination.pageSize = 5
      this.fetchListData()
    },
    handleAddItem (row) {
      console.log(row)
      // 处理companyId为数字的情况
      if (row.companyId + '' && typeof (row.companyId)) {
        row.companyId = row.companyId + ''
      }
      // 处理用户中心用户管理类用户类型
      if (row.userType) {
        row.userType = row.userType.value + ''
      }
      if (row.parentId + '' && typeof (row.parentId)) {
        row.parentId = row.parentId + ''
      }
      document.body.style.overflow = 'hidden'
      this.row = row
      if (row.id) {
        if (row.warehouseTime && row.warehouseTime !== '') {
          row.warehouseTime = moment(moment(row.warehouseTime).format('YYYY-MM-DD'), 'YYYY-MM-DD')
        }
        if (row.outboundTime && row.outboundTime !== '') {
          row.outboundTime = moment(moment(row.outboundTime).format('YYYY-MM-DD HH:mm:ss'), 'YYYY-MM-DD HH:mm:ss')
        }
        if (row.departureTime && row.departureTime !== '') {
          row.departureTime = moment(moment(row.departureTime).format('YYYY-MM-DD HH:mm:ss'), 'YYYY-MM-DD HH:mm:ss')
        }
        if (row.handleTime && row.handleTime !== '') {
          row.handleTime = moment(moment(row.handleTime).format('YYYY-MM-DD HH:mm:ss'), 'YYYY-MM-DD HH:mm:ss')
        }
        // 初始化联级选择省市区或者省市
        if (row.province && row.city) {
          if (row.area) {
            this.row.address = [row.province, row.city, row.area]
          } else {
            this.row.address = [row.province, row.city]
          }
        }
        this.modalTitle = '修改'
        const fieldArr = JSON.parse(JSON.stringify(this.default))
        fieldArr.forEach(item => {
          const { decorator: [fieldName, options] } = item
          if (fieldName === 'enableSecret') {
            options.initialValue = row[fieldName] === '1'
          } else {
            options.initialValue = row[fieldName]
          }
        })
        this.addField = fieldArr
      } else {
        // this.isEdit = false
        this.row = {}
        this.modalTitle = '新增'
        this.addField = JSON.parse(JSON.stringify(this.default))
      }
      this.addVisible = true
    },
    // 因为下拉选择要返回label跟value 又重新封装的方法
    handleAddItem1 (row) {
      if (call) {
        console.log(row)
        this.row = row
        if (row.id) {
          // debugger
          this.modalTitle = '修改'
          const fieldArr = JSON.parse(JSON.stringify(this.default))

          console.log(fieldArr)
          fieldArr.forEach((item, index) => {
            const { decorator: [fieldName, options] } = item
            if (item.type === 'select') {
              console.log(item)
              console.log(row[fieldName])
              // debugger
              const res = item.selectList.find(val => val.value.split(',')[0] === row[fieldName] + '')
              console.log(res)
              options.initialValue = res ? `${res.value}` : ''
            } else {
              options.initialValue = row[fieldName] ? `${row[fieldName]}` : ''
            }
          })
          console.log(fieldArr)
          this.addField = fieldArr
        } else {
        // this.isEdit = false
          this.row = {}
          this.modalTitle = '新增'
          this.addField = JSON.parse(JSON.stringify(this.default))
        }
        this.addVisible = true
      }
    },
    // 关于分页的公共方法
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination, filters, sorter)
      this.ipagination.current = pagination.current
      this.fetchListData()
    },
    onSelectChange (vals) {
      console.log(vals)
      this.selectedRowKeys = vals
    },
    // 列表删除
    handleDelete (id) {
      console.log(id)
      postAction(this.delUrl, { id }).then(res => {
        this.fetchListData()
        console.log(res)
      //   this.loading = false
      //   this.data = res.data.content
      //   this.ipagination = {
      //     total: Number(res.data.totalElements)
      //   }
      })
    },
    //
    handleShowField () {
      this.fieldVisble = true
      this.defaultFielsValue = this.columns.map(item => item.dataIndex)
    },
    changeShowField (status, val) {
      this.fieldVisble = status
      this.columns = val
    },
    // 获取公司列表
    fetchCompanylist (addIndex, searchIndex, val) { //, addHeadquarters
      console.log(addIndex, searchIndex)
      postAction('/usercenter/company/list', { onlyHeadCompany: !val, onlyMyCompany: true }).then(res => {
        const selectList = res.datas.list.map(item => {
          return {
            value: item.id + '',
            title: item.companyName,
            key: item.id + '',
            id: item.id + '',
            parentId: item.parentId + ''
          }
        })
        console.log(selectList)
        const result = transformToTreeFormat({ key: 'id', parentKey: 'parentId' }, selectList)
        if (val) {
          result.unshift({
            value: '0',
            title: '总公司',
            key: '999',
            id: '999',
            parentId: '0'
          })
        }
        console.log(result)
        // console.log(this.searchField)

        // console.log(transformToTreeFormat({ key: 'id', parentKey: 'parentId' }, selectList))
        this.default[addIndex].selectList = result

        if (searchIndex) {
          this.searchField[searchIndex].selectList = result
          this.searchField[searchIndex].decorator[1].initialValue = result.length ? result[0].value : ''
        }

        // console.log(this.searchField)
      })
    },
    // 导出excel的方法
    exportExcel () {
      require.ensure([], () => {
        const { exportJsonToExcel } = require('../vendor/Export2Excel')
        const tHeader = this.ExcelField.tHeader
        // 上面设置Excel的表格第一行的标题
        const filterVal = this.ExcelField.filterVal
        // 上面的index、nickName、name是tableData里对象的属性
        const list = this.data // 把data里的tableData存到list
        const data = this.formatJson(filterVal, list)
        exportJsonToExcel(tHeader, data, this.ExcelField.title)
      })
    },

    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }

}
