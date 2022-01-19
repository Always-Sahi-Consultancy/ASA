import './My_progress.css';

const MyProgress=() =>{
    const sliderValue= document.querySelector('span');
    const inputSlider = document.querySelector('input');
    const sliderHandler = (()=>{
        let value = inputSlider.value;
        sliderValue.textContent = value;
        sliderValue.style.left = (value/2) + "%";
        sliderValue.classList.add("show");
    });
    const blursliderHandler = (()=>{
        sliderValue.classList.remove("show");
    })
    return(
        <div>
            <div className='main-container'>
                <form method='post'>
                    <div className='progress'>
                        <div className='progress__heading'>My Progress</div>
                        <div className='progress__coursename'>NAME OF THE COURSE</div>
                        <div className='progress__text1'>Access to this course will end on Date </div>
                        <div className='range'>
                            <div className='sliderValue'>
                                <span>100</span>
                            </div>
                            <div className='field'>
                                <div className='value left'>0</div>
                                <input className='input' oninput={sliderHandler} onblur={blursliderHandler} type='range' min='0' max='100'  steps='1' draggable="true"></input>
                                <div className='value right'>100</div>
                            </div>
                        </div>
                        <button type='submit' className='progress__button'>Continue Learning</button>
                        <div className='progress__text2'>After completing the following course you can download your certificate of completion.</div>
                        <button type='submit' className='progress__certificate'>Download Certificate</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MyProgress;