<template>
    <div>
        <div class="cmp-state-item">
            <el-checkbox-group>
                <el-checkbox checked label="Option A">Pedido aceito</el-checkbox>
            </el-checkbox-group>
            <span>12:30</span>
        </div>
        <div class="cmp-state-item">
            <el-checkbox-group>
                <el-checkbox checked label="Option B">Pedido em preparo</el-checkbox>
            </el-checkbox-group>
            <span>12:45</span>
        </div>
        <div class="cmp-state-item">
            <el-checkbox-group>
                <el-checkbox label="Option C">Pronto para retirada</el-checkbox>
            </el-checkbox-group>
            <span>12:52</span>
        </div>
    </div>
</template>

<style>
.el-checkbox-grou{
    justify-items:initial ;
}
.cmp-state-item {   
    border-bottom: 1px #ccc dashed;
}

</style>