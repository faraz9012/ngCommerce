import { Component } from '@angular/core';

@Component({
  selector: 'app-sliding-card',
  standalone: true,
  imports: [],
  template: `
      <div class="container">
    <input type="radio" name="slide" id="c1"checked>
    <label for="c1" class="card">
        <div class="row">
            <div class="icon">1</div>
            <div class="description">
                <h4>Winter</h4>
                <p>Winter has so much to offer -
                 creative activities</p>
            </div>
        </div>
    </label>
    <input type="radio" name="slide" id="c2">
    <label for="c2" class="card">
        <div class="row">
            <div class="icon">2</div>
            <div class="description">
                <h4>Digital Technology</h4>
                <p>Gets better every day -
                 stay tuned</p>
            </div>
        </div>
    </label>
    <input type="radio" name="slide" id="c3" class="hidden">
    <label for="c3" class="card">
        <div class="row">
            <div class="icon">3</div>
            <div class="description">
                <h4>Globalization</h4>
                <p>Help people all over the world</p>
            </div>
        </div>
    </label>
    <input type="radio" name="slide" id="c4" class="hidden">
    <label for="c4" class="card">
        <div class="row">
            <div class="icon">4</div>
            <div class="description">
                <h4>New technologies</h4>
                <p>Space engineering becomes
                 more and more advanced</p>
            </div>
        </div>
    </label>
  `,
  styles: `
  .container {
    height: 400px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
}

.card {
    width: 80px;
    border-radius: .75rem;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
    transition: .6s cubic-bezier(.28,-0.03,0,.99);
    box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8);
}

.card > .row {
    color: white;
    display: flex;
    flex-wrap: nowrap;
}

.card > .row > .icon {
    background: #223;
    color: white;
    border-radius: 50%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
}

.card > .row > .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 80px;
    width: 520px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;
}

.description p {
    color: #b0b0ba;
    padding-top: 5px;
}

.description h4 {
    text-transform: uppercase;
}

input {
    display: none;
}

input:checked + label {
    width: 600px;
}

input:checked + label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.card[for="c1"] {
    background-image: url('https://images.unsplash.com/photo-1517866184231-7ef94c2ea930?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
.card[for="c2"] {
    background-image: url('https://images.unsplash.com/photo-1614026480209-cd9934144671?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
.card[for="c3"] {
    background-image: url('https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
.card[for="c4"] {
    background-image: url('https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
  ` 
})
export class SlidingCardComponent {

}
