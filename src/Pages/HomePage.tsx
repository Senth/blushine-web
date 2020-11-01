import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  return (
    <div className='content'>
      <h1>Server Info</h1>
      <p>
        Blushine is a vanilla++ server for casuals, builders and redstoners. The server uses the same seed as
        Hermitcraft 7.
      </p>

      <h2>Server IP</h2>
      <p>
        IP: senth.org
        <br />
        Use the default port number
      </p>

      <h2>Quality of Life Mods</h2>
      <p>
        A few QoL mods and datapacks have been enabled to make the server a bit less grindy to play. You are also free
        to use any client-side mods that you want. Check out the <Link to='/mods'>mods</Link> tab for more information.
      </p>
      <p>We also have a live map where you can see the entire map including online players.</p>

      <h2>World Snapshot</h2>
      <p>
        Every hour, a snapshot is taken of the world. Feel free to download this world to design or try things out in
        creative before you build them on the server.
      </p>
      <p>
        <a href='/saves/current-server-world.tgz'>Download Snapshot</a>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sollicitudin est. Aenean vulputate lorem mauris,
        eu fringilla tellus commodo a. Aenean mattis, libero eu volutpat interdum, diam mi accumsan arcu, in bibendum
        orci sem vitae orci. Quisque scelerisque eros sollicitudin mauris euismod, nec luctus quam lobortis. Phasellus
        varius id lorem id lobortis. Suspendisse vitae sagittis nulla. Mauris et luctus lectus, non placerat arcu. Ut
        non auctor erat, ut ullamcorper lacus. Sed et porta eros, vel faucibus lorem. Cras eu maximus est, quis
        fringilla massa. Nulla vulputate quis urna in commodo. Donec metus arcu, ultrices suscipit elit ut, tincidunt
        laoreet elit. Nunc nisi elit, egestas ut augue sit amet, faucibus posuere ex. Sed ac felis vel urna suscipit
        luctus commodo scelerisque ante. Donec malesuada in libero eget tincidunt. Quisque ac risus nulla. Nulla luctus
        elit et augue condimentum euismod. Praesent malesuada laoreet eleifend. Curabitur imperdiet nulla metus, euismod
        consequat purus malesuada eu. Aenean justo mauris, suscipit vitae sagittis vitae, fermentum in est. Ut eu
        dignissim erat, et aliquet ante. Ut blandit tincidunt commodo. Phasellus faucibus gravida sem, vitae malesuada
        metus cursus sed. Maecenas suscipit est at est commodo vulputate. Proin eros dolor, rutrum vitae fringilla
        accumsan, elementum sit amet dolor. Duis vel dolor nisl. Phasellus sit amet nunc odio. Proin non risus in libero
        mattis faucibus. Phasellus rutrum ex id fermentum interdum. Praesent blandit elementum neque, quis venenatis
        ligula. Nullam ullamcorper ante non fringilla feugiat. Suspendisse in finibus turpis. Aliquam sem dui, aliquam
        quis rutrum sed, iaculis id turpis. Sed vel tellus id orci tincidunt convallis. In hac habitasse platea
        dictumst. Ut quis efficitur leo. Aenean auctor diam eget turpis gravida, vitae hendrerit orci feugiat.
        Vestibulum vel mi id elit egestas commodo. Suspendisse ut ullamcorper massa. Nullam condimentum auctor orci, eu
        fermentum eros tincidunt non. Nunc nec posuere orci. Pellentesque iaculis pulvinar ante dignissim placerat.
        Pellentesque metus massa, posuere sed enim vel, suscipit ullamcorper mi. Quisque viverra tellus purus, ac ornare
        ipsum fringilla at. Sed fringilla diam at purus ullamcorper ultricies non elementum dolor. Etiam in euismod ex,
        id porttitor risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nullam sed diam vitae eros venenatis dapibus lobortis ac purus. Cras vitae lacus metus. Ut faucibus
        ligula eu rutrum convallis. Donec accumsan, tellus sit amet euismod semper, dolor ex consequat neque, non luctus
        quam sapien sed velit. Cras laoreet lobortis nulla. Curabitur congue ex nec sem vestibulum lacinia. Nam a enim
        turpis. In vel scelerisque arcu. Donec dapibus ac arcu id efficitur. Donec dignissim diam enim, at sodales nulla
        elementum eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
        sodales libero eget tortor fringilla ornare. Phasellus molestie odio nec nisl imperdiet, vitae elementum diam
        semper. In hac habitasse platea dictumst. Proin sagittis nisl pulvinar imperdiet interdum. Quisque ex nisi,
        tempor eu tincidunt ut, venenatis ac mi. Aenean dignissim mi ac odio tempus dapibus. Aliquam erat volutpat.
        Nullam fermentum sagittis elit nec porttitor. Maecenas consequat congue tempus. Aenean dictum quam ac turpis
        dictum, sed convallis nisi eleifend. Nam varius pharetra molestie. Pellentesque neque augue, vehicula sit amet
        justo in, accumsan facilisis sem. Donec auctor nisi ac nunc semper tempor. Morbi sodales maximus ultricies.
        Maecenas et elit ut augue ornare convallis. Curabitur pharetra maximus leo at venenatis. Suspendisse porta augue
        vitae nibh eleifend, a commodo est mattis. In posuere fermentum arcu eu maximus. Etiam pellentesque viverra
        lacinia. Proin in mi massa. Donec magna turpis, lobortis vel nisi at, accumsan iaculis turpis. Pellentesque
        blandit varius eros in lacinia. Fusce sodales ex quis semper varius. Mauris in diam ac lacus cursus dictum. Ut
        ullamcorper scelerisque odio pellentesque gravida. In ac lectus faucibus, faucibus nunc id, fermentum neque.
        Vestibulum luctus ipsum urna, et feugiat augue egestas at. Aliquam erat volutpat. Maecenas sit amet eros varius,
        vestibulum nisi a, ornare elit. Aenean at lectus metus. Integer eu tempor turpis. Nam euismod arcu id eros
        rutrum ullamcorper quis vitae risus. Vivamus egestas mi felis, ac rutrum est condimentum vitae. Donec a accumsan
        nisl. Sed finibus metus metus. Phasellus lobortis vitae tellus sed commodo. Suspendisse mollis, mauris sed
        faucibus commodo, magna turpis dictum ante, sit amet efficitur diam eros ac lectus. Phasellus placerat lacus
        metus, non pulvinar diam sagittis tincidunt. Vivamus at porta dolor, ac lacinia urna. Nam ullamcorper purus at
        magna aliquam, a pulvinar ligula tempor. Maecenas in erat nec turpis aliquet scelerisque sed non nunc. Ut
        volutpat sem a faucibus convallis. Quisque vel justo pretium, bibendum lectus id, dapibus leo. Praesent
        dignissim at ipsum sed pulvinar. Donec dignissim vehicula velit, eget dapibus urna elementum sed. Quisque a
        imperdiet magna, at mollis urna. Ut a scelerisque nibh, vitae cursus sem. Nam mattis faucibus eros quis
        convallis. Ut interdum velit id quam fringilla tincidunt. Fusce aliquam mollis urna et placerat. Pellentesque
        velit lacus, elementum rhoncus bibendum in, convallis at augue. Quisque pharetra egestas arcu sit amet
        venenatis. Cras vitae sodales nisl. Cras laoreet, erat quis sollicitudin tristique, elit justo posuere nunc, et
        rutrum felis arcu at nisl. Pellentesque hendrerit sagittis tortor, a cursus nunc egestas vel. Vivamus non
        sagittis neque. Curabitur pulvinar dolor felis, at consectetur magna consectetur at. Nam sit amet auctor lectus.
        Maecenas dapibus enim nec leo interdum, tincidunt malesuada ante finibus. Sed id lobortis ipsum, vitae maximus
        ante. Nullam blandit urna vel tellus malesuada, id interdum augue rhoncus. Ut purus massa, malesuada id tempus
        sit amet, finibus sed sapien. Nam mollis ante ut euismod vehicula. Sed rutrum elit ut eros laoreet hendrerit.
        Suspendisse accumsan porttitor erat, id sollicitudin augue pretium ut. Etiam est turpis, ullamcorper sed
        vestibulum sed, congue eget dui. Morbi sed vulputate mauris, eget gravida augue. Suspendisse quis lorem
        dignissim, tincidunt libero pellentesque, consectetur eros. Nam ullamcorper turpis mi, sed convallis massa
        interdum eu. Donec aliquet erat at sapien vehicula, et cursus neque gravida. Proin pharetra varius leo ut
        varius. Ut vehicula placerat maximus. Nam aliquam erat lectus, et varius lectus molestie quis. Donec ullamcorper
        mi quis neque hendrerit venenatis. Donec vel ex commodo, accumsan metus non, blandit enim. Pellentesque
        ullamcorper vehicula diam, sit amet mattis ipsum dignissim sit amet. Sed viverra purus vitae enim volutpat, quis
        tincidunt sapien placerat. Nulla mattis pellentesque est vel scelerisque. Sed mattis tristique ipsum, nec
        laoreet nibh ornare eget. Aenean id nibh at tortor mollis lacinia at a tortor. In rutrum, ex eget feugiat
        tempus, elit nisl fermentum urna, id placerat enim enim at magna. Etiam vel est non neque iaculis interdum vitae
        at leo. Pellentesque eget vehicula quam. Nulla facilisi. Aenean vel maximus erat. Aenean ultricies quam
        fringilla ex laoreet molestie. Suspendisse iaculis suscipit mi a pharetra. Praesent placerat quam vel suscipit
        maximus. Maecenas elementum leo et velit accumsan luctus. Praesent molestie pellentesque fringilla. In quis
        sollicitudin nulla. Aenean feugiat sed velit eleifend aliquet. Curabitur placerat dapibus ligula, sit amet
        dapibus sem faucibus in. In hac habitasse platea dictumst. Fusce maximus sem ut tempor eleifend. Donec rutrum
        dictum dui in finibus. In ornare vitae eros sed sollicitudin. Cras finibus maximus interdum. Proin porta nibh id
        est feugiat, eget laoreet ex pulvinar. Donec eget turpis egestas, commodo velit consectetur, feugiat massa.
        Fusce pulvinar molestie quam, in fermentum lectus accumsan id. Vivamus ut hendrerit justo. Etiam vitae lectus
        tellus. Nunc dictum justo vitae odio pulvinar, a elementum ante laoreet. Nullam ut elit egestas, tincidunt dui
        quis, cursus risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin
        a lectus felis. Phasellus non tellus dolor. Cras ullamcorper condimentum pharetra. Curabitur elementum libero
        vitae est molestie tempor non sed mi. Fusce arcu quam, eleifend nec laoreet eget, porta sed metus. Duis a porta
        mi. Sed sed urna sagittis lorem posuere faucibus ut et arcu. Sed sodales ac velit sit amet ultricies. Proin
        metus orci, facilisis id porttitor ut, dignissim eu ante. Fusce varius eget ligula sed sollicitudin. Cras ac
        tristique tellus. Ut dui neque, fringilla at semper nec, euismod sit amet libero. Aliquam at fermentum tortor,
        sed malesuada justo. Nam sagittis ex id nibh eleifend eleifend. Vivamus venenatis condimentum lorem, ut sagittis
        massa posuere a. Ut nec purus a orci viverra feugiat eget eu orci. Phasellus condimentum, enim in fermentum
        semper, quam libero tincidunt dui, vel condimentum mi magna sed turpis. Sed magna velit, viverra sed fringilla
        nec, luctus nec sapien. Pellentesque lectus diam, porttitor nec facilisis et, tempor at elit. In pharetra est
        non feugiat lacinia. Morbi lobortis, nisi ac placerat vestibulum, dui velit tempus lorem, in egestas nisi nisl
        et orci. Curabitur feugiat malesuada facilisis. Pellentesque id sem pulvinar, rhoncus turpis in, dapibus tellus.
        Donec turpis libero, aliquam eget sem ac, porta fringilla sapien. In hac habitasse platea dictumst. Mauris
        scelerisque nisl risus, ut ullamcorper nisi suscipit eget. Aenean dapibus, est in venenatis vestibulum, sem
        nulla commodo purus, non gravida elit arcu vel enim. Morbi aliquam nulla nec cursus semper.
      </p>
    </div>
  )
}

export default HomePage
