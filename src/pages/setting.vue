<template>
  <div class="content-row" id="main_bdoy_id">
    <div class="row content-row-modal">
      <div class="col-md-12">
        <h2 class="content-row-title">Modals</h2>
        <div class="modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title">Contact</h4>
              </div>
              <div class="modal-body">
                <p>配置连接信息</p>
                <div class="row">
                  <div class="col-xs-8" v-for="item in settings">
                    <label>{{item}}</label>
                    <input type="text" class="form-control" :name="item" v-bind:placeholder="item">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-success">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  var settings = ['name', 'age', 'type', 'class'];

  export default {
    name: "setting",
    data() {
      return {settings: settings}
    }
  }

</script>

<style scoped>

</style>
