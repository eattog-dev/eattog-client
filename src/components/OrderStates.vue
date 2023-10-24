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
.cmp-states-order{
    text-align: center;
    width: 20em;
    border-bottom: 1px dashed var(--gray200);
}

.cmp-state-item {
    display: flex;
    gap: 8px;
    border-bottom: 2px #ccc dashed;
}

</style>