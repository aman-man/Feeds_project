import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedServicesService } from '../feed-services.service';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit {
  feedId: any;
  feedData: any;
  textData: string;
  body: any;

  constructor(
    private feedService: FeedServicesService,
    private route: ActivatedRoute,
    private router: Router,
    private tostr: ToastrService
  ) { }

  ngOnInit(): void {
    this.feedId = this.route.snapshot.queryParamMap.get('feedId');
    console.log('this.feedId:', this.feedId)
    this.getFeedById();
  }

  getFeedById() {
    this.feedService.getFeedDetail(this.feedId).subscribe(response => {
       console.log('resp:', response);
       this.feedData = response;
    }, error => {
      console.log(error);
    })
  };

  editFeed() {
    this.textData = this.feedData.data.text;
  }

  updateFeed() {
    this.body = {
      id: this.feedId,
      text: this.textData
    }
    console.log(this.body);
    this.feedService.updateFeedDetails(this.body).subscribe(response => {
      this.tostr.success('Updated Sucessfully');
      this.getFeedById();
    }, error => {
      this.tostr.error('Unable to update');
    });
  }

  navigateBack() {
    this.router.navigateByUrl('/feed-list');
  }

  deleteFeed() {
    this.feedService.deleteFeed(this.feedId).subscribe(response => {
      this.tostr.success('Deleted Successfully');
      this.navigateBack();
    }, error=>{
      this.tostr.error('Not able to delete');
    })
  }

}
