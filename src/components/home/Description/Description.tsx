"use client"
import Image from 'next/image'
import { useState } from 'react'
import styles from './Description.module.sass'
import classNames from 'classnames/bind'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACAAIADASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAwQCBQEAB//EAB4QAAMBAAMBAQEBAAAAAAAAAAABAgMRITESBBNB/8QAGAEBAQEBAQAAAAAAAAAAAAAAAwIBBAD/xAAZEQEBAQEBAQAAAAAAAAAAAAAAAQIREgP/2gAMAwEAAhEDEQA/APz88aE4MtFxdY4PjXB9wPkOn0jQHKGhCipoKM0DminNBabCSjfB9EiKTn0SDaCsochXJCkmhJqW6ok1QuHqi0J69KtUT0jqyiuh8njko+TLk4pXTYncnnAzkz8j5otRmUNCMyh85F6GwmclWchZSV5yRpj2JFUm4gVQBpUTuQrgtcA3BC+udrJFtPp1NpIdpEy85uqJqRZsiakPmsdj5MuR3JikcUrqTuTPyNSMcD5o7GZQ+aMSh80NKLUPlJXlIGSLcpMoyZyMpPs5GmQq8FyDpBY5B0khvXN2kg3n06u0nP8A0IqNcrZeklrsv3RHa7Ela7jQdIVmKOSOoNINoWg2PlNeyPmBPo+Q0HqLMV4W5IixLsTKKqs10PKBz8KJDqGWgdEUPwHUl5BsvTnfoXp09zm/o/09FRzN16RWi7f1kV+lxUdlszTPHRiqOeR09Zphtn10G6FywqY+bJJofOhYmuhiy7F+HNxouxo9Q2Ohmx5fRJnQ80RUUrYOjNOgNKJSn3Zzf0P0u3o536H6aqIP0EWj7Kt36R2+yoqOm7MVQTsxVhyF9N1QboOrDdlyLlUTQ+dEKsbOynq6mNluN+HJystysy0djqZ2PNnPz0HnToi0Vit2DpYb0CuzyWNrOfvXpRtZBvRseS716R2+x9qJbrsuRvVDszVk/wBmXZ7y9NFqzDsKrMOzeGzVCsbOyFWNFk0sdPKyzLQ5WVlWdkWssdXPQedDmxoNOhPQ2LP6B3oB/Qxdmwde62RbWJpZHrRcSHWia32b0oCqFkZ1n7PHYXJ42XwOdNujLow2Z5JsdfzpVQ0USpiwwtOrK7OirOyDNlWbBtbYuixZskhjSyQ6h/voxVmOTFMuC080r0l0oXRk2jFyKh0YFMTRg0x4nr//2Q=='


export const Description = () => {
    const [hasBorder, setBorder] = useState(false);
    const handleClick = () => setBorder(!hasBorder);
    const cx = classNames.bind(styles);
    const buttonStyles = cx('Description__button',{
        'Description__button--border':hasBorder,
    })
    console.log(buttonStyles)

    return (
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
                    <Image

                        src="/images/description.jpeg"

                        alt="products marketplace"

                        fill
                        placeholder='blur'
                        blurDataURL={PLACEHOLDER_IMAGE}

                    />
                </div>
            </button>

            <div className={styles.Description__text}>
            <h2>Bring the future today</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga officiis modi repellat obcaecati, reprehenderit delectus vitae. Vel assumenda dolore amet magnam officiis alias consequuntur eveniet, magni adipisci totam exercitationem aut!</p>
            </div>
        </section>
    )
}