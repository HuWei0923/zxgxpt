<template>
    <el-dialog title="信保报告申请"
               :visible.sync="dialogVisible"
               @close="QualityDialogClose"
               width="1200px"
               class="report-dialog"
    >
        <div class="report-box">
            <table border="1" class="report-table">
                <tr>
                    <td colspan="9" style="background:#E3E3E3;font-weight:bold">信保报告申请（已有信保代码）</td>
                </tr>
                <tr class="gbGray">
                    <th width="100px">买方代码</th>
                    <th width="200px">待调查企业中国信保企业代码</th>
                    <th width="100px">待调查企业国别</th>
                    <th width="150px">待调查企业中文名称</th>
                    <th width="150px">待调查企业英文名称 </th>
                    <th width="100px">待调查企业地址</th>
                    <th width="220px">待调查企业统一社会信用代码</th>
                    <th width="70px">是否导读</th>
                    <th></th>
                </tr>
                <tr>
                    <td>
                        <el-input disabled v-model="haveCreditCode.clientNo"></el-input>
                    </td>
                    <td>
                        <el-input v-model="haveCreditCode.reportbuyerNo"></el-input>
                    </td>
                    <td style="background:#FAFAFA"></td>
                  <td>
                    <el-input v-model="haveCreditCode.reportCorpChnName"></el-input>
                  </td>
                  <td>
                    <el-input v-model="haveCreditCode.reportCorpEngName"></el-input>
                  </td>
                    <td style="background:#FAFAFA"></td>
                    <td style="background:#FAFAFA"></td>
                    <td>
                        <el-select v-model="haveCreditCode.istranslation">
                            <el-option v-for="(item,index) in istranslation" :value="item.id" :key="item.id" :label="item.name">
                            </el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-button type="primary" size="mini" @click="applyHaveCode">点击申请</el-button>
                    </td>
                </tr>
            </table>
        </div>

        <div class="report-box">
            <table border="1" class="report-table">
                <tr>
                    <td colspan="9" style="background:#E3E3E3;font-weight:bold">信保报告申请（无信保代码）</td>
                </tr>
                <tr class="gbGray">
                    <th width="100px">买方代码</th>
                    <th width="200px">待调查企业中国信保企业代码</th>
                    <th width="100px">待调查企业国别</th>
                    <th width="150px">待调查企业中文名称</th>
                    <th width="150px">待调查企业英文名称 </th>
                    <th width="100px">待调查企业地址</th>
                    <th width="220px">待调查企业统一社会信用代码</th>
                    <th width="70px">是否导读</th>
                    <th></th>
                </tr>
                <tr>
                    <td>
                        <el-input disabled v-model="haveCreditCode.clientNo"></el-input>
                    </td>
                    <td style="background:#FAFAFA"></td>
                    <td>
                        <!-- <el-input v-model="noCreditCode.reportCorpCountryCode"></el-input> -->
                        <el-select v-model="noCreditCode.reportCorpCountryCode" placeholder='' filterable>
                            <el-option v-for="item in nationTypeOptions" :key="item.nationCode" :label="item.nationName"
                                       :value="item.nationCode">
                                <span style="float: left">{{ item.nationName }}</span>
                                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.nationCode }}</span>
                            </el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-input v-model="noCreditCode.reportCorpChnName"></el-input>
                    </td>
                    <td>
                        <el-input v-model="noCreditCode.reportCorpEngName"></el-input>
                    </td>
                    <td>
                        <el-input v-model="noCreditCode.reportCorpaddress"></el-input>
                    </td>
                    <td>
                        <el-input v-model="noCreditCode.creditno"></el-input>
                    </td>
                    <td>
                        <el-select v-model="noCreditCode.istranslation">
                            <el-option v-for="(item,index) in istranslation" :value="item.id" :key="item.id" :label="item.name">
                            </el-option>
                        </el-select>
                    </td>
                    <td>
                        <el-button type="primary" size="mini" @click="applyNoCode">点击申请</el-button>
                    </td>
                </tr>
            </table>
        </div>
    </el-dialog>
</template>
<script>
    export default {
        name: 'zxbReportApply',
        props: {
            dialogXBVisible:{
                type:Boolean,
                require:false
            }
        },
        data() {
            return {
                dialogVisible: false,
                haveCreditCode: {
                    clientNo: '',
                    userId: parseInt(this.$Cookies.get('userId')),
                    reportbuyerNo: '',
                    reportCorpCountryCode: '',
                    reportCorpChnName: '',
                    reportCorpEngName: '',
                    reportCorpaddress: '',
                    creditno: '',
                    istranslation: '0'
                },
                noCreditCode: {
                    clientNo: '',
                    userId: parseInt(this.$Cookies.get('userId')),
                    reportbuyerNo: '',
                    reportCorpCountryCode: '',
                    reportCorpChnName: '',
                    reportCorpEngName: '',
                    reportCorpaddress: '',
                    creditno: '',
                    istranslation: '0',
                },
                nationTypeOptions:[],
                istranslation: [{ name: '否', id: '0' }, { name: '是', id: '1' }],
                noIstranslation: [{ name: '否', id: '0' }, { name: '是', id: '1' }],
                isClientNo:false,
                isZxbreportAudit:false,
            }
        },
        mounted() {
            this.getNationCode()
            this.getCodeInfo()
            this.getReviewer()
        },
        methods: {
            QualityDialogClose() {
                this.$emit("update:dialogXBVisible", false);
            },
            //获取国家代码
            getNationCode () {
                this.$ajax.manage.getNationCode({}).then(res => {
                    console.log(res);
                    if (res.status == 200) {
                        this.nationTypeOptions = res.data.nationCode
                    }
                })
            },
            applyReport () {
                //打开报告申请弹框
                this.dialogXBVisible = true;
                this.getCodeInfo()
                this.getReviewer()
            },
            getCodeInfo () {
                let param = {
                    userId: this.$Cookies.get('userId')
                }
                this.$ajax.manage.getCodeInfoByUserId(param).then(res => {
                  console.log(res.data)
                    if (res.data.code == '0') {
                        this.isClientNo = false;
                        if (res.data.codeInfo) {
                            this.haveCreditCode.clientNo = res.data.codeInfo.clientNo;
                            this.noCreditCode.clientNo = res.data.codeInfo.clientNo;
                            //this.haveCreditCode.reportbuyerNo = res.data.codeInfo.reportbuyerNo
                           if(res.data.codeInfo.clientNo){
                             this.isClientNo = true;
                           }

                        }
                    }
                })
            },
          getReviewer() {
            let param = {
              userName: this.$Cookies.get('username')
            }
            this.$ajax.manage.getReviewer(param).then(res => {
              if (res.data.code == '0') {
                  this.isZxbreportAudit = res.data.isReviewer;
                  console.log(res.data.isReviewer)
              }
            })
          },
            applyNoCode () {
              // if (!this.noCreditCode.clientNo || this.noCreditCode.clientNo === '') {
              //      this.$message.warning('请输入买方代码');
              //      return;
              // } else
              if((!this.isClientNo && !this.isZxbreportAudit) || !this.isClientNo){
                this.$message.warning('您所在的二级公司没有开通信保通业务，如需使用该功能请咨询公司管理员。');
                return;
              }else if(!this.isZxbreportAudit){
                this.$message.warning('您所在的二级公司没有设置信保审核专员，如需使用该功能请咨询公司管理员。');
                return;
              }else if (this.noCreditCode.reportCorpCountryCode === '') {
                    this.$message.warning('请输入待调查企业国别');
                    return;
                } else if (this.noCreditCode.reportCorpChnName === '' && this.noCreditCode.reportCorpEngName === '') {
                    this.$message.warning('请输入待调查企业中文名称或英文名称');
                    return;
                } else if (this.noCreditCode.reportCorpaddress === '') {
                    this.$message.warning('请输入待调查企业地址');
                    return;
                } else if (this.noCreditCode.creditno === '') {
                    this.$message.warning('请输入待调查企业统一社会信用代码');
                    return;
                }else if (this.noCreditCode.istranslation === '') {
                    this.$message.warning('请输入是否导读');
                    return;
                }
                this.$ajax.manage.zhongxinbaoApply(this.noCreditCode).then(res => {
                  console.log(!this.isClientNo)
                  console.log(!this.isZxbreportAudit)
                    if (res.status == 200) {
                        this.$message.success(res.data.returnMsg);
                        this.dialogXBVisible = false;
                    }
                })
            },
            applyHaveCode () {
                // if (!this.haveCreditCode.clientNo || this.haveCreditCode.clientNo === '') {
                //     // this.$message.warning('请输入买方代码');
                //     // return;
                // } else
              if((!this.isClientNo && !this.isZxbreportAudit) || !this.isClientNo){
                this.$message.warning('您所在的二级公司没有开通信保通业务，如需使用该功能请咨询公司管理员。');
                return;
              }else if(!this.isZxbreportAudit){
                this.$message.warning('您所在的二级公司没有设置信保审核专员，如需使用该功能请咨询公司管理员。');
                return;
              }else  if (!this.haveCreditCode.reportbuyerNo || this.haveCreditCode.reportbuyerNo == '') {
                    this.$message.warning('请输入待调查企业中国信保企业代码');
                    return;
                }else if (this.haveCreditCode.reportCorpChnName === '' && this.haveCreditCode.reportCorpEngName === '') {
                  this.$message.warning('请输入待调查企业中文名称或英文名称');
                  return;
                }
                this.$ajax.manage.zhongxinbaoApply(this.haveCreditCode).then(res => {
                  console.log(!this.isClientNo)
                  console.log(!this.isZxbreportAudit)
                    if (res.status == 200) {
                        this.$message.success(res.data.returnMsg);
                        this.dialogXBVisible = false
                    }
                })
            }
        },
        watch:{
            dialogXBVisible(newVal){
                this.dialogVisible = newVal
            }
        }
    }
</script>

<style scoped>
    .el-dialog__body{
        padding-bottom:30px;
        padding-left:20px;
        padding-right:20px;
        padding-top:30px;
    }
    .report-dialog {
        line-height: 30px;
    }
    .report-table {
        line-height: 30px;
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        border-spacing: 0;
        border: 1px solid #e3e3e3;
        margin: 15px auto;
        table-layout: fixed;
        td {
            word-break: break-all;
            /*允许在字内换行,即单词可分*/
            word-wrap: break-word;
            /*允许长单词或URL地址换行*/
            border-right: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3;
            font-size: 14px;
            height: 36px;
        }

        .gbGray {
            background: #f1f3f4;
        }
    }
    .report-box {
        line-height: 30px;
        white-space: normal;
        table {
            table-layout: auto;
            th {
                border-right: 1px solid #e3e3e3;
                border-bottom: 1px solid #e3e3e3;
                height: 36px;
            }
            border: none;
            td {
                //border: none;
            }
        }
    }
</style>