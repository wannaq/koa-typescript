define({ "api": [
  {
    "type": "DELETE",
    "url": "http://localhost:8085/api/category/:id",
    "title": "[删除分类]",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category unique ID.</p>"
          }
        ]
      }
    },
    "group": "Category",
    "description": "<p>删除分类</p>",
    "version": "0.0.0",
    "filename": "build/controller/category.js",
    "groupTitle": "Category",
    "name": "DeleteHttpLocalhost8085ApiCategoryId",
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "http://localhost:8085/api/category",
    "title": "[获取所有分类]",
    "group": "Category",
    "description": "<p>获取所有分类</p>",
    "success": {
      "examples": [
        {
          "title": "Success Data Example",
          "content": "[\n        {\n            \"_id\": \"58574961e41d873604a59e8c\",\n            \"text\": \"技术\",\n            \"date\": \"2016-12-19T02:43:45.951Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"58574982e41d873604a59e8d\",\n            \"text\": \"笔记\",\n            \"date\": \"2016-12-19T02:44:18.629Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"585749aaeb1b95321856d9af\",\n            \"text\": \"其它\",\n            \"date\": \"2016-12-19T02:44:58.389Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"585749b4eb1b95321856d9b0\",\n            \"text\": \"测试\",\n            \"date\": \"2016-12-19T02:45:08.094Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"585ce1bde74aec51ec2d191a\",\n            \"text\": \"gg\",\n            \"date\": \"2016-12-23T08:35:09.550Z\",\n            \"__v\": 0\n        }\n    ]",
          "type": "json"
        },
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/controller/category.js",
    "groupTitle": "Category",
    "name": "GetHttpLocalhost8085ApiCategory"
  },
  {
    "type": "POST",
    "url": "http://localhost:8085/api/category",
    "title": "[添加分类]",
    "group": "Category",
    "description": "<p>添加分类</p>",
    "version": "0.0.0",
    "filename": "build/controller/category.js",
    "groupTitle": "Category",
    "name": "PostHttpLocalhost8085ApiCategory",
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "http://localhost:8085/api/post/:id",
    "title": "[删除文章]",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post unique ID.</p>"
          }
        ]
      }
    },
    "group": "Post",
    "description": "<p>删除文章</p>",
    "version": "0.0.0",
    "filename": "build/controller/post.js",
    "groupTitle": "Post",
    "name": "DeleteHttpLocalhost8085ApiPostId",
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "http://localhost:8085/api/post",
    "title": "[获取所有文章]",
    "parameter": {
      "fields": {
        "page": [
          {
            "group": "page",
            "type": "date",
            "optional": true,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "page",
            "type": "date",
            "optional": true,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "page",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "page",
            "type": "string",
            "optional": true,
            "field": "sort",
            "description": "<p>排序字段名称</p>"
          },
          {
            "group": "page",
            "type": "number",
            "optional": true,
            "field": "currentPage",
            "defaultValue": "1",
            "description": "<p>当前页</p>"
          },
          {
            "group": "page",
            "type": "number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>每页显示数量</p>"
          }
        ]
      }
    },
    "group": "Post",
    "description": "<p>获取所有文章</p>",
    "version": "0.0.0",
    "filename": "build/controller/post.js",
    "groupTitle": "Post",
    "name": "GetHttpLocalhost8085ApiPost",
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "http://localhost:8085/api/post/:id",
    "title": "[获取某篇文章]",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post unique ID.</p>"
          }
        ]
      }
    },
    "group": "Post",
    "description": "<p>根据文章ID获取某篇文章</p>",
    "success": {
      "examples": [
        {
          "title": "Success Data Example",
          "content": "{\n    \"_id\": \"587c2f5539c06d2e689c808c\",\n    \"title\": \"test\",\n    \"author\": \"admin\",\n    \"content\": \"# dsas\",\n    \"category\": \"笔记\",\n    \"date\": \"2017-01-16T00:00:00.000Z\",\n    \"delivery\": false,\n    \"__v\": 0,\n    \"tag\": [\n      \"mock\",\n      \"dva\",\n      \"eve\"\n    ]\n  },\n  \"total\": 0,\n  \"error\": false,\n  \"msg\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/controller/post.js",
    "groupTitle": "Post",
    "name": "GetHttpLocalhost8085ApiPostId"
  },
  {
    "type": "POST",
    "url": "http://localhost:8085/api/post",
    "title": "[添加文章]",
    "group": "Post",
    "description": "<p>添加文章</p>",
    "version": "0.0.0",
    "filename": "build/controller/post.js",
    "groupTitle": "Post",
    "name": "PostHttpLocalhost8085ApiPost",
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "http://localhost:8085/api/post",
    "title": "[修改文章]",
    "group": "Post",
    "description": "<p>根据文章ID修改当前文章</p>",
    "version": "0.0.0",
    "filename": "build/controller/post.js",
    "groupTitle": "Post",
    "name": "PutHttpLocalhost8085ApiPost",
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "http://localhost:8085/api/category/:id",
    "title": "[删除标签]",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Tag unique ID.</p>"
          }
        ]
      }
    },
    "group": "Tag",
    "description": "<p>删除标签</p>",
    "version": "0.0.0",
    "filename": "build/controller/tag.js",
    "groupTitle": "Tag",
    "name": "DeleteHttpLocalhost8085ApiCategoryId",
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "http://localhost:8085/api/tag",
    "title": "[获取所有标签]",
    "group": "Tag",
    "description": "<p>获取所有标签</p>",
    "success": {
      "examples": [
        {
          "title": "Success Data Example",
          "content": "[\n    {\n      \"_id\": \"585743f87dab573ef45f4841\",\n      \"text\": \"js\",\n      \"date\": \"2016-12-19T02:20:40.613Z\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"5857445e7dab573ef45f4842\",\n      \"text\": \"css\",\n      \"date\": \"2016-12-19T02:22:22.337Z\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"585744627dab573ef45f4843\",\n      \"text\": \"vue\",\n      \"date\": \"2016-12-19T02:22:26.133Z\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"585744fd7dab573ef45f4844\",\n      \"text\": \"angular2\",\n      \"date\": \"2016-12-19T02:25:01.811Z\",\n      \"__v\": 0\n    },\n    {\n      \"_id\": \"585744ff7dab573ef45f4845\",\n      \"text\": \"react\",\n      \"date\": \"2016-12-19T02:25:03.463Z\",\n      \"__v\": 0\n    }\n]",
          "type": "json"
        },
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "build/controller/tag.js",
    "groupTitle": "Tag",
    "name": "GetHttpLocalhost8085ApiTag"
  },
  {
    "type": "POST",
    "url": "http://localhost:8085/api/category",
    "title": "[添加标签]",
    "group": "Tag",
    "description": "<p>添加标签</p>",
    "version": "0.0.0",
    "filename": "build/controller/tag.js",
    "groupTitle": "Tag",
    "name": "PostHttpLocalhost8085ApiCategory",
    "success": {
      "examples": [
        {
          "title": "Response 200 Example",
          "content": "HTTP/1.1 200 Interface Error\n{\n  \"code\": 200,\n  \"message\": \"请求成功\",\n  \"data\": {\n    \"result\": [],\n    \"total\": 10,\n    \"error\": \"error\",\n    \"msg\": \"msg\"\n  }",
          "type": "json"
        },
        {
          "title": "Response 500 Example",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"服务器错误\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
