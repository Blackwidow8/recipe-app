const CustomImages = ({imgSrc, pt}) =>{
    return(
<>

<div className="custome-image" style={{paddingTop: pt}}>
    <img src={imgSrc} alt="img" />
</div>
</>
    )
}

export default CustomImages;