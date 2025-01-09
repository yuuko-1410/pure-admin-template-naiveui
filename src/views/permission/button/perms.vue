<script setup lang="ts">
import { hasPerms } from "@/utils/auth";
import { useUserStoreHook } from "@/store/modules/user";

const { permissions } = useUserStoreHook();

defineOptions({
  name: "PermissionButtonLogin"
});
</script>

<template>
  <div>
    <p class="mb-2">当前拥有的code列表：{{ permissions }}</p>
    <p v-show="permissions?.[0] === '*:*:*'" class="mb-2">
      *:*:* 代表拥有全部按钮级别权限
    </p>

    <el-card shadow="never" class="mb-2">
      <template #header>
        <div class="card-header">组件方式判断权限</div>
      </template>
      <el-space wrap>
        <Perms value="permission:btn:add">
          <n-button plain type="warning">
            拥有code：'permission:btn:add' 权限可见
          </n-button>
        </Perms>
        <Perms :value="['permission:btn:edit']">
          <n-button plain type="primary">
            拥有code：['permission:btn:edit'] 权限可见
          </n-button>
        </Perms>
        <Perms
          :value="[
            'permission:btn:add',
            'permission:btn:edit',
            'permission:btn:delete'
          ]"
        >
          <n-button plain type="error">
            拥有code：['permission:btn:add', 'permission:btn:edit',
            'permission:btn:delete'] 权限可见
          </n-button>
        </Perms>
      </el-space>
    </el-card>

    <el-card shadow="never" class="mb-2">
      <template #header>
        <div class="card-header">函数方式判断权限</div>
      </template>
      <el-space wrap>
        <n-button v-if="hasPerms('permission:btn:add')" plain type="warning">
          拥有code：'permission:btn:add' 权限可见
        </n-button>
        <n-button v-if="hasPerms(['permission:btn:edit'])" plain type="primary">
          拥有code：['permission:btn:edit'] 权限可见
        </n-button>
        <n-button
          v-if="
            hasPerms([
              'permission:btn:add',
              'permission:btn:edit',
              'permission:btn:delete'
            ])
          "
          plain
          type="error"
        >
          拥有code：['permission:btn:add', 'permission:btn:edit',
          'permission:btn:delete'] 权限可见
        </n-button>
      </el-space>
    </el-card>

    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          指令方式判断权限（该方式不能动态修改权限）
        </div>
      </template>
      <el-space wrap>
        <n-button v-perms="'permission:btn:add'" plain type="warning">
          拥有code：'permission:btn:add' 权限可见
        </n-button>
        <n-button v-perms="['permission:btn:edit']" plain type="primary">
          拥有code：['permission:btn:edit'] 权限可见
        </n-button>
        <n-button
          v-perms="[
            'permission:btn:add',
            'permission:btn:edit',
            'permission:btn:delete'
          ]"
          plain
          type="error"
        >
          拥有code：['permission:btn:add', 'permission:btn:edit',
          'permission:btn:delete'] 权限可见
        </n-button>
      </el-space>
    </el-card>
  </div>
</template>
