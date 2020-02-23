function shadowizard(options) {
    let images = document.querySelectorAll('.shadowtile');

    if (options.shadow_type === 'hard')
        options.shadow_type = '0px';
    else
        options.shadow_type = '15px';

    images.forEach(image => {
        image.style.boxShadow = '0 2.8px ${options.shadow_type} rgba(0, 0, 0, 0.034), 0 6.7px ${options.shadow_type} rgba(0, 0, 0, 0.048), 0 12.5px ${options.shadow_type} rgba(0, 0, 0, 0.06), 0 22.3px ${options.shadow_type} rgba(0, 0, 0, 0.072), 0 41.8px ${options.shadow_type} rgba(0, 0, 0, 0.086), 0 100px ${options.shadow_type} rgba(0, 0, 0, 0.12)';

        if(options.padding){
            image.style.padding = '1em';
        }
    });
}
module.exports.shadowtile = shadowtile;