import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

import { jsPDF } from "jspdf";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  selectedPost: Post;

  // colonne della prime table
  cols: any[];
  exportColumns: any[];

  constructor(
    private ps: PostService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'userId', header: 'ID Utente' },
      { field: 'title', header: 'Titolo del post' }
    ];

    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
    this.ps.getPosts().subscribe(p => this.posts = p);
  }

  selectPost(post: Post) {
    this.router.navigate(['post', post.id]);
    this.selectedPost = post;
  }

  // exportPdf() {
  //   let doc = new jsPDF('l', 'pt');
  //   doc.autoTable(this.exportColumns, this.posts);
  //   doc.save('products.pdf'); 
  // }


  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.posts);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "posts");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }
}
