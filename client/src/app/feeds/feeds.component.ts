import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedServicesService } from '../feed-services.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  feedForm: FormGroup;
  postMedia : any;
  allFeeds: any;
  noData : boolean = false;

  constructor( 
    private fb: FormBuilder,
    private feedService: FeedServicesService,
    private toastr: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.feedForm = this.fb.group({
      image: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });

    this.getAllFeeds();
  }

  mediaUpload(image) {
    const file = (image.target as HTMLInputElement).files;
    const accept = ['image/jpeg', 'image/png'];
    if (accept.includes(file[0].type)) {

      const reader = new FileReader();

      reader.readAsDataURL(file[0]);
      reader.onloadend = (event: any) => {
        const media = (event.target as FileReader).result;
        this.postMedia = media;
        this.feedForm.controls['image'].patchValue(media.toString());
      };
    }
  }

  navigate(feedId) {
    console.log('id :', feedId);
    this.route.navigate(['/feed-detail'], { queryParams: { feedId: feedId } });
    // this.route.navigateByUrl('/feed-detail')
  }

  saveFeedDetail() {
    console.log('feed-data', this.feedForm.value);
    this.feedService.saveFeed(this.feedForm.value).subscribe( response => {
      console.log('response:', response);
      this.getAllFeeds();
      this.toastr.success('Successfully Saved');
      this.feedForm.reset();
      this.postMedia = null;
    }, error => {
      console.log('error');
      this.toastr.error('Something went worng')
      this.feedForm.reset();
    })
  }

  getAllFeeds() {
    this.feedService.getAllFeeds().subscribe( response => {
      console.log('response:', response);
      this.allFeeds = response;
      if(this.allFeeds.data === 0) {
        this.noData = true;
      }
      console.log('this.allFeeds:', this.allFeeds.data)
    }, error => {
      console.log('error');
    })
  }

  reset() {
    this.feedForm.reset();
  };

}
