import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {


  public strings = strings;
  unreadNotificationCount = 0;
  validHeightFormat = true;
  height: any;
  height_cm : any;
  weight: any;
  resultNumber = '00.0';
  resultText = strings.ST131;
  icon = './assets/images/normal.png';
  color = 'var(--ion-color-primary)';

  constructor(    
    private DataService: DataService,
    private router: Router,
    private storage: Storage) { }


  async ionViewWillEnter() {
    this.storage.get('userinfo').then(userinfo=>{
      this.DataService.getUnreadCount(userinfo.email).subscribe( resp => {
        this.unreadNotificationCount = resp[0].unreadcount;
    
      });
    });
  }  
  ngOnInit() {
    this.color = '#dd0024';
  }


 validateFormat(input) {
   var pattern = "^(([0-9]{1,}\')?([0-9]{1,}\x22)?)$";
   var regex = new RegExp(pattern, "g");
    return regex.test(input)
  }
  inputHeight(){
    this.validHeightFormat = true;
  }
  MetricCalculate() {

    const weight = this.weight;
    var str = "foo35bar5jhkj88"; 

    var height = this.height.match(/\d+/g); 
    if(height.length > 1){
      this.height_cm = (Number)(height[0])*30.48 + (Number)(height[1])*2.54;
    }else{
      this.height_cm = (Number)(height[0])*30.48;
    }

    // if(this.validateFormat(height)){

      if (Number(this.height_cm) && Number(weight)) {

        const imc = ((weight / this.height_cm / this.height_cm) * 10000);

        this.resultNumber = imc.toFixed(2);
        this.color = '#dd0024';
        if (imc < 18.5) {
          this.resultText = strings.ST132;
          // this.color = '#22a6b3';
          this.icon = './assets/images/underweight.png';
        } else if (imc > 18.5 && imc < 25) {
          this.resultText = strings.ST133;
          // this.color = '#6ab04c';
          this.icon = './assets/images/normal.png';
        } else if (imc >= 25 && imc < 30) {
          this.resultText = strings.ST134;
          // this.color = '#f0932b';
          this.icon = './assets/images/overweight.png';
        } else {
          this.resultText = strings.ST135;
          // this.color = '#eb4d4b';
          this.icon = './assets/images/obesity.png';
        }

      }      
    // }else{
    //   this.validHeightFormat = false;
    // }

  }
  openNotifications(){
    if(this.unreadNotificationCount < 1)
      return;
    this.router.navigateByUrl('/notifications');
  }

}
