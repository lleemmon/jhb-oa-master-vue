import request from '@/utils/request'

const baseUrl = '/admin/system/sysRole'
const POST = 'post'
const GET = 'get'
const DELETE = 'delete'
const PUT = 'put'

//params 普通对象传递
//data 使用json格式传递
export default {
    findAll(){
        return request({
            url: `${baseUrl}/findAll`,
            method: GET
        })
    },
    //角色列表-条件分页查询
    getPageList(page, limit, sysRoleQueryVo){
        return request({
            url: `${baseUrl}/${page}/${limit}`,
            method: GET,
            params: sysRoleQueryVo
        })
    },
    //角色删除
    removeById(id){
        return request({
            url:`${baseUrl}/remove/${id}`,
            method: DELETE
        })
    },
    //角色添加
    saveRole(role){
        return request({
            url: `${baseUrl}/save`,
            method: POST,
            data: role
        })
    },
    //修改  
    updateById(role) {
        return request({
            url: `${baseUrl}/update`,
            method: PUT,
            data: role
        })
    },
    getById(id){
        return request({
            url: `${baseUrl}/get/${id}`,
            method: GET
        })
    },
    //批量删除
    batchRemove(idList) {
        return request({
            url: `${baseUrl}/batchRemove`,
            method: DELETE,
            data: idList
        })
    },
    getRoles(adminId) {
        return request({
          url: `${baseUrl}/toAssign/${adminId}`,
          method: GET
        })
      },
      
    assignRoles(assginRoleVo) {
        return request({
            url: `${baseUrl}/doAssign`,
            method: POST,
            data: assginRoleVo
        })
    }
}