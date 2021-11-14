<template>
  <div class="container-fluid conatainer-px">
    <nav aria-label="breadcrumb" class="py-2 mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none">首頁</a>
        </li>
        <li class="breadcrumb-item active">探索景點</li>
      </ol>
    </nav>

    <form class="d-flex py-4">
      <div>
        <select class="form-select" aria-label="Default select example">
          <option value="全部縣市" selected>全部縣市</option>
          <option value="新北市">新北市</option>
          <option value="台北市">台北市</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          class="form-control"
          placeholder="想找有趣的？請輸入關鍵字"
        />
      </div>
      <button type="submit" class="btn btn-customer">搜尋</button>
    </form>

    <h3 class="mt-5 mb-4">熱門主題</h3>
    <div class="row">
      <div class="col-md-3 col-6 mb-3">
        <div
          class="category bg-cover bg-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
          "
        >
          <strong>熱門景點</strong>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div
          class="category bg-cover bg-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
          "
        >
          <strong>熱門景點</strong>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div
          class="category bg-cover bg-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
          "
        >
          <strong>熱門景點</strong>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div
          class="category bg-cover bg-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
          "
        >
          <strong>熱門景點</strong>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div
          class="category bg-cover bg-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
          "
        >
          <strong>熱門景點</strong>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div
          class="category bg-cover bg-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
          "
        >
          <strong>熱門景點</strong>
        </div>
      </div>
    </div>
  </div>
</template>
