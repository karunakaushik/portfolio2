import React ,{Component} from 'react'
import './css/pro.css'

export default class Header extends Component{
    render(){
        return(
            <React.Fragment>
        <div class="container">
			
			<section class="main">
			
				<ul class="ch-grid">
					<li>
						<div class="ch-item">				
							<div class="ch-info">
								<div class="ch-info-front ch-img-1"></div>
								<div class="ch-info-back">
									<h3>Mouse</h3>
									<p>by Alexander Shumihin <a href="http://drbl.in/eAoj">View on Dribbble</a></p>
								</div>	
							</div>
						</div>
					</li>
					{/* <li>
						<div class="ch-item">
							<div class="ch-info">
								<div class="ch-info-front ch-img-2"></div>
								<div class="ch-info-back">
									<h3>You</h3>
									<p>by Zoe Ingram <a href="http://drbl.in/eCcV">View on Dribbble</a></p>
								</div>
							</div>
						</div>
					</li> */}
					{/* <li>
						<div class="ch-item">
							<div class="ch-info">
								<div class="ch-info-front ch-img-3"></div>
								<div class="ch-info-back">
									<h3>Love</h3>
									<p>by Eileen Tjan <a href="http://drbl.in/ewTL">View on Dribbble</a></p>
								</div>
							</div>
						</div>
					</li> */}
				</ul>
				
			</section>
        </div>
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="http://tympanus.net/codrops/adpacks/csscustom.js"></script> 
	<script src="http://tympanus.net/codrops/wp-content/plugins/oiopub-direct/js.php?type=banner&align=center&zone=1"></script>

    </React.Fragment>

)
}
}