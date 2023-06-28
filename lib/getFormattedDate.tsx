export default function getFormatteddate(dateString: string){
    return new Intl.DateTimeFormat('en-US' , {dateStyle: "long"}).format(new Date(dateString))
}