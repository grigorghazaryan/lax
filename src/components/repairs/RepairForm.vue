<template>
    <div class="repair-form">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="title text-center">What Do You Drive</h2>
                    <p class="title-text text-center">Alternatively, <span>Enter the License Plate</span></p>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <select class="form-control">
                            <option>Year</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select class="form-control">
                            <option>Make</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select class="form-control">
                            <option>Model</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select class="form-control">
                            <option>Engine</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="number" placeholder="Estimated Mileage" step="any" class="form-control">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RepairForm"
    }
</script>

<style scoped>
    .repair-form{
        padding-top: 80px;
    }
    .title{
        font-size: 32px;
        color: #4A4A4A;
        font-family: MontSemiBold, sans-serif;
    }
    .form-control{
        border: none;
        border-bottom: 2px solid #d8e4fb;
        color: #31569C;
        font-family: PoppinsLight, sans-serif;
    }
    .title-text{
        color: #4A4A4A;
        font-family: PoppinsRegular, sans-serif;
    }
    .title-text span{
        color: #31569C;
    }
    @media (min-width: 1200px) {
        .form-control{
            width: 800px;
            display: inline;
        }
        .form-group{
            text-align: center;
            margin-bottom: 40px;
        }
    }
</style>
